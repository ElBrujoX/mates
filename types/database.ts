export interface Room {
  id: string
  name: string
  created_at: string
  created_by: string
  is_private: boolean
  max_participants: number
  current_participants: number
  settings: RoomSettings
}

export interface RoomSettings {
  video_enabled: boolean
  audio_enabled: boolean
  chat_enabled: boolean
  screen_share_enabled: boolean
  recording_enabled: boolean
  max_duration_minutes: number
}

export interface RoomParticipant {
  id: string
  room_id: string
  user_id: string
  joined_at: string
  role: 'host' | 'participant'
  connection_status: 'connected' | 'disconnected'
  last_active: string
}

export interface ChatMessage {
  id: string
  room_id: string
  user_id: string
  content: string
  created_at: string
  type: 'text' | 'system' | 'file'
  metadata?: any
}

export interface Database {
  public: {
    Tables: {
      rooms: {
        Row: Room
        Insert: Partial<Room>
        Update: Partial<Room>
      }
      room_participants: {
        Row: RoomParticipant
        Insert: Partial<RoomParticipant>
        Update: Partial<RoomParticipant>
      }
      chat_messages: {
        Row: ChatMessage
        Insert: Partial<ChatMessage>
        Update: Partial<ChatMessage>
      }
    }
  }
} 