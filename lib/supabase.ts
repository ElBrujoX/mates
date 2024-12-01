import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

// Add debug logging
console.log('Initializing Supabase with:', {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
})

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function createRoom(roomData: Partial<Room>) {
  const { data, error } = await supabase
    .from('rooms')
    .insert([roomData])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function joinRoom(roomId: string, userId: string) {
  const { data: room, error: roomError } = await supabase
    .from('rooms')
    .select()
    .eq('id', roomId)
    .single()

  if (roomError) throw roomError

  if (room.current_participants >= room.max_participants) {
    throw new Error('Room is full')
  }

  const { error: participantError } = await supabase
    .from('room_participants')
    .insert([{
      room_id: roomId,
      user_id: userId,
      role: 'participant',
      connection_status: 'connected'
    }])

  if (participantError) throw participantError

  await supabase
    .from('rooms')
    .update({ current_participants: room.current_participants + 1 })
    .eq('id', roomId)
}

export async function leaveRoom(roomId: string, userId: string) {
  const { error: participantError } = await supabase
    .from('room_participants')
    .update({ connection_status: 'disconnected' })
    .eq('room_id', roomId)
    .eq('user_id', userId)

  if (participantError) throw participantError

  const { data: room } = await supabase
    .from('rooms')
    .select()
    .eq('id', roomId)
    .single()

  await supabase
    .from('rooms')
    .update({ current_participants: Math.max(0, room.current_participants - 1) })
    .eq('id', roomId)
}

export async function saveMessage(message: Omit<ChatMessage, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([message])
    .select()
    .single()

  if (error) throw error
  return data
} 