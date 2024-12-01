import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const realtimeClient = createClient<Database>(supabaseUrl, supabaseKey)

export function subscribeToUpdates(callback: (payload: any) => void) {
  const channel = realtimeClient
    .channel('watch-tower-updates')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'live_updates'
      },
      (payload) => callback(payload)
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'scam_reports'
      },
      (payload) => callback(payload)
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'verified_scams'
      },
      (payload) => callback(payload)
    )
    .subscribe()

  return () => {
    channel.unsubscribe()
  }
} 