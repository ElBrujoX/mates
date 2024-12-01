import { Server } from 'socket.io'
import { createServer } from 'http'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

interface Room {
  id: string
  peers: Map<string, {
    socket: any
    streams: MediaStream[]
  }>
}

const rooms = new Map<string, Room>()

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  socket.on('join-room', (roomId: string) => {
    let room = rooms.get(roomId)
    if (!room) {
      room = {
        id: roomId,
        peers: new Map()
      }
      rooms.set(roomId, room)
    }

    room.peers.set(socket.id, {
      socket,
      streams: []
    })

    // Notify others in room
    socket.to(roomId).emit('peer-joined', socket.id)
    socket.join(roomId)
  })

  socket.on('signal', ({ peerId, signal }) => {
    socket.to(peerId).emit('signal', {
      peerId: socket.id,
      signal
    })
  })

  socket.on('disconnect', () => {
    rooms.forEach(room => {
      if (room.peers.has(socket.id)) {
        room.peers.delete(socket.id)
        io.to(room.id).emit('peer-left', socket.id)
      }
    })
  })
})

const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`)
}) 