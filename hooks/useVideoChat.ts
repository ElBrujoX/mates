import { useEffect, useRef, useState, useCallback } from 'react'
import { io, Socket } from 'socket.io-client'
import { Device } from 'mediasoup-client'
import { WebRTCPeer } from '@/lib/webrtc'
import { supabase, joinRoom, leaveRoom as supabaseLeaveRoom, saveMessage } from '@/lib/supabase'
import { createSignalingChannel } from '@/lib/signaling-service'
import { analyzeConversation, getAIEnhancedMatch } from '@/lib/ai-service'
import { RoomParticipant } from '@/types/database'

interface ChatMessage {
  peerId: string
  message: string
  timestamp: number
}

interface AIInsight {
  timestamp: number
  analysis: {
    sentiment: string
    topics: string[]
    suggestions: string[]
  }
}

export function useVideoChat(roomId: string, userId: string, isAIEnhanced: boolean = false) {
  const [peers, setPeers] = useState<Map<string, MediaStream>>(new Map())
  const [localStream, setLocalStream] = useState<MediaStream | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('disconnected')
  const [participants, setParticipants] = useState<RoomParticipant[]>([])
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const socketRef = useRef<Socket>()
  const deviceRef = useRef<Device>()
  const peersRef = useRef<Map<string, WebRTCPeer>>(new Map())
  const screenStreamRef = useRef<MediaStream | null>(null)
  const signalingChannelRef = useRef<any>(null)

  useEffect(() => {
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: 'user'
          },
          audio: true
        })
        
        setLocalStream(stream)
        
        // Set initial track states
        const audioTrack = stream.getAudioTracks()[0]
        const videoTrack = stream.getVideoTracks()[0]
        
        if (audioTrack) {
          audioTrack.enabled = !isMuted
        }
        if (videoTrack) {
          videoTrack.enabled = !isVideoOff
        }

      } catch (err) {
        console.error('Error accessing media devices:', err)
      }
    }

    initializeMedia()

    // Cleanup function
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop())
      }
    }
  }, []) // Empty dependency array since we only want this to run once on mount

  const analyzeChat = useCallback(async (message: string) => {
    if (!message.trim() || !isAIEnhanced) return
    
    setIsAnalyzing(true)
    try {
      const analysis = await analyzeConversation(message)
      setAiInsights(prev => [...prev, {
        timestamp: Date.now(),
        analysis
      }])
    } catch (error) {
      console.error('Error analyzing chat:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }, [isAIEnhanced])

  const sendMessage = useCallback(async (content: string) => {
    try {
      const message = await saveMessage({
        room_id: roomId,
        user_id: userId,
        content,
        type: 'text'
      })

      peersRef.current.forEach(peer => {
        peer.sendData({ type: 'chat', message })
      })

      setMessages(prev => [...prev, {
        peerId: 'local',
        message: content,
        timestamp: Date.now()
      }])

      if (isAIEnhanced) {
        analyzeChat(content)
      }
    } catch (err) {
      console.error('Error sending message:', err)
    }
  }, [roomId, userId, isAIEnhanced, analyzeChat])

  const initializePeer = useCallback(async (peerId: string, initiator: boolean) => {
    const peer = new WebRTCPeer(peerId)
    peersRef.current.set(peerId, peer)

    if (localStream) {
      localStream.getTracks().forEach(track => {
        peer.addTrack(track, localStream)
      })
    }

    peer.onTrack((stream) => {
      setPeers(prev => new Map(prev).set(peerId, stream))
    })

    peer.onData((data) => {
      if (data.type === 'chat') {
        setMessages(prev => [...prev, {
          peerId,
          message: data.message,
          timestamp: Date.now()
        }])
      }
    })

    if (initiator) {
      const offer = await peer.createOffer()
      signalingChannelRef.current?.send({
        peerId,
        signal: { type: 'offer', offer }
      })
    }

    return peer
  }, [localStream])

  const toggleScreenShare = useCallback(async () => {
    try {
      if (isScreenSharing) {
        // Stop screen sharing
        screenStreamRef.current?.getTracks().forEach(track => track.stop())
        screenStreamRef.current = null

        // Reactivate camera stream if it wasn't manually turned off
        if (localStream) {
          const videoTrack = localStream.getVideoTracks()[0]
          if (videoTrack) {
            videoTrack.enabled = true // Always enable camera when stopping screen share
            setIsVideoOff(false) // Reset video off state
            peersRef.current.forEach(peer => {
              peer.addTrack(videoTrack, localStream)
            })
          }
        }
      } else {
        // Start screen sharing
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: false
        })

        // Store the screen sharing stream
        screenStreamRef.current = stream

        // Add screen track to all peers
        peersRef.current.forEach(peer => {
          stream.getTracks().forEach(track => {
            peer.addTrack(track, stream)
          })
        })

        // Handle when user stops sharing via browser controls
        stream.getVideoTracks()[0].onended = () => {
          toggleScreenShare()
        }
      }
      setIsScreenSharing(!isScreenSharing)
    } catch (err) {
      console.error('Error toggling screen share:', err)
      setIsScreenSharing(false)
      
      // Ensure camera is on if screen share fails
      if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0]
        if (videoTrack) {
          videoTrack.enabled = true
          setIsVideoOff(false)
        }
      }
    }
  }, [isScreenSharing, localStream])

  const handleOffer = async (peerId: string, offer: RTCSessionDescriptionInit) => {
    let peer = peersRef.current.get(peerId)
    if (!peer) {
      peer = await initializePeer(peerId, false)
    }
    
    const answer = await peer.handleOffer(offer)
    signalingChannelRef.current?.send({
      peerId,
      signal: { type: 'answer', answer }
    })
  }

  const handleAnswer = async (peerId: string, answer: RTCSessionDescriptionInit) => {
    const peer = peersRef.current.get(peerId)
    if (peer) {
      await peer.handleAnswer(answer)
    }
  }

  const handleCandidate = async (peerId: string, candidate: RTCIceCandidateInit) => {
    const peer = peersRef.current.get(peerId)
    if (peer) {
      await peer.handleCandidate(candidate)
    }
  }

  useEffect(() => {
    let signalingChannel: any

    const initializeSignaling = async () => {
      setConnectionStatus('connecting')
      signalingChannel = await createSignalingChannel(roomId)
      
      // Handle incoming signals
      supabase
        .channel(`signaling:${roomId}`)
        .on('broadcast', { event: 'signal' }, ({ payload }) => {
          const { peerId, signal } = payload
          
          if (signal.type === 'offer') {
            handleOffer(peerId, signal.offer)
          } else if (signal.type === 'answer') {
            handleAnswer(peerId, signal.answer)
          } else if (signal.type === 'candidate') {
            handleCandidate(peerId, signal.candidate)
          }
        })
        .subscribe()

      setConnectionStatus('connected')
    }

    initializeSignaling()

    return () => {
      signalingChannel?.close()
    }
  }, [roomId])

  // Subscribe to room changes
  useEffect(() => {
    const roomSubscription = supabase
      .channel(`room:${roomId}`)
      .on('presence', { event: 'sync' }, () => {
        // Handle presence sync
      })
      .on('presence', { event: 'join' }, ({ newPresences }) => {
        setParticipants(prev => [...prev, ...newPresences])
      })
      .on('presence', { event: 'leave' }, ({ leftPresences }) => {
        setParticipants(prev => 
          prev.filter(p => !leftPresences.find(lp => lp.user_id === p.user_id))
        )
      })
      .subscribe()

    return () => {
      supabase.removeChannel(roomSubscription)
    }
  }, [roomId])

  // Join room on mount
  useEffect(() => {
    const joinAndSetupRoom = async () => {
      try {
        await joinRoom(roomId, userId)
      } catch (error) {
        console.error('Error joining room:', error)
      }
    }

    joinAndSetupRoom()

    return () => {
      const cleanup = async () => {
        try {
          await supabaseLeaveRoom(roomId, userId)
        } catch (error) {
          console.error('Error leaving room:', error)
        }
      }
      cleanup()
    }
  }, [roomId, userId])

  const findAIEnhancedMatch = useCallback(async () => {
    if (!isAIEnhanced) return
    
    try {
      const match = await getAIEnhancedMatch(userId, {
        // Add matching preferences here
      })
      
      if (match) {
        // Initialize peer connection with matched user
        const peer = await initializePeer(match.id, true)
        // Additional match handling...
      }
    } catch (error) {
      console.error('Error finding AI match:', error)
    }
  }, [isAIEnhanced, userId, initializePeer])

  const handleLeaveRoom = useCallback(async () => {
    try {
      // Stop screen sharing if active
      if (isScreenSharing) {
        screenStreamRef.current?.getTracks().forEach(track => track.stop())
        screenStreamRef.current = null
        setIsScreenSharing(false)
      }

      // Ensure camera is on unless manually turned off
      if (localStream && !isVideoOff) {
        const videoTrack = localStream.getVideoTracks()[0]
        if (videoTrack) {
          videoTrack.enabled = true
        }
      }

      // Close peer connections
      peersRef.current.forEach(peer => peer.close())
      peersRef.current.clear()
      setPeers(new Map())
      
      // Disconnect socket
      socketRef.current?.disconnect()

      // Update Supabase
      await supabaseLeaveRoom(roomId, userId)
    } catch (error) {
      console.error('Error leaving room:', error)
    }
  }, [isScreenSharing, localStream, isVideoOff, roomId, userId])

  return {
    localStream,
    peers,
    messages,
    connectionStatus,
    isMuted,
    isVideoOff,
    isScreenSharing,
    toggleMute: () => {
      if (localStream) {
        const audioTrack = localStream.getAudioTracks()[0]
        audioTrack.enabled = !audioTrack.enabled
        setIsMuted(!audioTrack.enabled)
      }
    },
    toggleVideo: () => {
      if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0]
        videoTrack.enabled = !videoTrack.enabled
        setIsVideoOff(!videoTrack.enabled)
      }
    },
    toggleScreenShare,
    sendMessage,
    leaveRoom: handleLeaveRoom,
    participants,
    aiInsights,
    isAnalyzing,
    findAIEnhancedMatch,
    screenStreamRef: screenStreamRef.current,
    sendChatMessage: async (content: string) => {
      if (!content.trim()) return;
      
      try {
        // Save to Supabase
        const message = await saveMessage({
          room_id: roomId,
          user_id: userId,
          content,
          type: 'text'
        });

        // Send to peers
        peersRef.current.forEach(peer => {
          peer.sendData({
            type: 'chat',
            message: {
              content,
              senderId: userId,
              timestamp: Date.now()
            }
          });
        });

        // Add to local messages
        setMessages(prev => [...prev, {
          peerId: 'local',
          message: content,
          timestamp: Date.now()
        }]);

        // Analyze with AI if enabled
        if (isAIEnhanced) {
          analyzeChat(content);
        }

        return message;
      } catch (err) {
        console.error('Error sending message:', err);
        throw err;
      }
    }
  }
} 