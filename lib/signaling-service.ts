import { supabase } from '@/lib/supabase'

export async function createSignalingChannel(roomId: string) {
  const channel = supabase.channel(`signaling:${roomId}`)

  channel
    .on('broadcast', { event: 'signal' }, ({ payload }) => {
      // Handle incoming signals
      console.log('Received signal:', payload)
    })
    .subscribe()

  return {
    send: async (signal: any) => {
      await channel.send({
        type: 'broadcast',
        event: 'signal',
        payload: signal
      })
    },
    close: () => {
      channel.unsubscribe()
    }
  }
} 