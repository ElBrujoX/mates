export interface SignalingMessage {
  type: 'offer' | 'answer' | 'candidate'
  offer?: RTCSessionDescriptionInit
  answer?: RTCSessionDescriptionInit
  candidate?: RTCIceCandidateInit
}

export interface PeerSignal {
  peerId: string
  signal: SignalingMessage
} 