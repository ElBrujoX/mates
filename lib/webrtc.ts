export class WebRTCPeer {
  pc: RTCPeerConnection
  dataChannel: RTCDataChannel | null = null
  private onTrackCallbacks: ((stream: MediaStream) => void)[] = []
  private onDataCallbacks: ((data: any) => void)[] = []

  constructor(private peerId: string) {
    this.pc = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        {
          urls: 'turn:turn.solmates.io:3478',
          username: 'solmates',
          credential: process.env.NEXT_PUBLIC_TURN_CREDENTIAL
        }
      ]
    })

    this.setupPeerConnection()
  }

  private setupPeerConnection() {
    this.pc.ontrack = (event) => {
      this.onTrackCallbacks.forEach(cb => cb(event.streams[0]))
    }

    this.pc.ondatachannel = (event) => {
      this.dataChannel = event.channel
      this.setupDataChannel()
    }
  }

  private setupDataChannel() {
    if (!this.dataChannel) return

    this.dataChannel.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        this.onDataCallbacks.forEach(cb => cb(data))
      } catch (err) {
        console.error('Error parsing data channel message:', err)
      }
    }
  }

  async createOffer() {
    this.dataChannel = this.pc.createDataChannel('data')
    this.setupDataChannel()

    const offer = await this.pc.createOffer()
    await this.pc.setLocalDescription(offer)
    return offer
  }

  async handleOffer(offer: RTCSessionDescriptionInit) {
    await this.pc.setRemoteDescription(new RTCSessionDescription(offer))
    const answer = await this.pc.createAnswer()
    await this.pc.setLocalDescription(answer)
    return answer
  }

  async handleAnswer(answer: RTCSessionDescriptionInit) {
    await this.pc.setRemoteDescription(new RTCSessionDescription(answer))
  }

  async handleCandidate(candidate: RTCIceCandidateInit) {
    await this.pc.addIceCandidate(new RTCIceCandidate(candidate))
  }

  addTrack(track: MediaStreamTrack, stream: MediaStream) {
    this.pc.addTrack(track, stream)
  }

  onTrack(callback: (stream: MediaStream) => void) {
    this.onTrackCallbacks.push(callback)
  }

  onData(callback: (data: any) => void) {
    this.onDataCallbacks.push(callback)
  }

  sendData(data: any) {
    if (this.dataChannel?.readyState === 'open') {
      this.dataChannel.send(JSON.stringify(data))
    }
  }

  close() {
    this.dataChannel?.close()
    this.pc.close()
  }
} 