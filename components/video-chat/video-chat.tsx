'use client'

import { useEffect, useRef, useState } from 'react'
import { Mic, MicOff, Video, VideoOff, Monitor, X, UserIcon, AlertCircle, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useVideoChat } from '@/hooks/useVideoChat'
import { RoomParticipant } from '@/types/database'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow } from 'date-fns'

interface VideoChatProps {
  roomId: string
  userId: string
  isAIEnhanced?: boolean
}

export function VideoChat({ roomId, userId, isAIEnhanced = false }: VideoChatProps) {
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const remoteVideoRef = useRef<HTMLVideoElement>(null)
  
  const {
    localStream,
    peers,
    connectionStatus,
    isMuted,
    isVideoOff,
    isScreenSharing,
    toggleMute,
    toggleVideo,
    toggleScreenShare,
    leaveRoom,
    aiInsights,
    isAnalyzing,
    screenStreamRef,
    sendChatMessage,
    messages,
  } = useVideoChat(roomId, userId, isAIEnhanced)

  const [messageInput, setMessageInput] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Handle local stream
  useEffect(() => {
    if (localVideoRef.current) {
      const stream = isScreenSharing ? screenStreamRef : localStream
      if (stream) {
        localVideoRef.current.srcObject = stream
      }
    }
  }, [localStream, isScreenSharing, screenStreamRef])

  // Handle remote streams
  useEffect(() => {
    if (remoteVideoRef.current && peers.size > 0) {
      const [firstPeer] = Array.from(peers.values())
      remoteVideoRef.current.srcObject = firstPeer
    }
  }, [peers])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    try {
      await sendChatMessage(messageInput)
      setMessageInput('')
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  return (
    <div className="flex gap-6 h-[calc(100vh-16rem)]">
      <div className="flex-1 flex flex-col gap-4">
        {/* Local video */}
        <div className="flex-1 aspect-video bg-gray-900 rounded-lg overflow-hidden relative shadow-md">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover transition-opacity duration-200 ${
              isVideoOff ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
            You {isScreenSharing && '(Screen Sharing)'}
          </div>
          {isVideoOff && !isScreenSharing && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90">
              <UserIcon className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>

        {/* Remote video */}
        <div className="flex-1 aspect-video bg-gray-100 rounded-lg overflow-hidden relative shadow-md">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          {peers.size === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <UserIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-xs">
                  {connectionStatus === 'connecting' 
                    ? 'Connecting...' 
                    : 'Waiting for others to join...'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Video Controls */}
        <div className="flex justify-center gap-4 py-2">
          <Button
            onClick={toggleMute}
            variant={isMuted ? "destructive" : "secondary"}
            size="icon"
            className="rounded-full w-12 h-12 transition-colors duration-200"
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </Button>
          <Button
            onClick={toggleVideo}
            variant={isVideoOff ? "destructive" : "secondary"}
            size="icon"
            className="rounded-full w-12 h-12 transition-colors duration-200"
          >
            {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
          </Button>
          <Button
            onClick={toggleScreenShare}
            variant={isScreenSharing ? "destructive" : "secondary"}
            size="icon"
            className="rounded-full w-12 h-12 transition-colors duration-200"
          >
            {isScreenSharing ? <X className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
          </Button>
          <Button
            onClick={leaveRoom}
            variant="destructive"
            size="icon"
            className="rounded-full w-12 h-12"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Chat Panel */}
      <div className="w-[400px] bg-white rounded-lg shadow-sm flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-lg">Chat</h2>
        </div>
        
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.peerId === 'local' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.peerId === 'local'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {formatDistanceToNow(msg.timestamp, { addSuffix: true })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </ScrollArea>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100">
          <div className="flex gap-2">
            <Input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..."
              className="rounded-full"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="rounded-full bg-purple-500 hover:bg-purple-600 flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-white" />
            </Button>
          </div>
        </form>
      </div>

      {/* AI Insights */}
      {isAIEnhanced && aiInsights.length > 0 && (
        <div className="absolute top-4 right-4 w-64 space-y-2 z-10">
          {aiInsights.slice(-1).map((insight, i) => (
            <Alert key={i} variant="default" className="bg-purple-500/10 border-purple-500/20">
              <AlertCircle className="h-4 w-4 text-purple-500" />
              <AlertDescription className="text-xs">
                {insight.analysis.suggestions[0]}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}
    </div>
  )
} 