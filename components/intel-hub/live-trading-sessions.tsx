import { Users } from 'lucide-react'

export function LiveTradingSessions() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Live Trading Sessions</h2>
      </div>
      <div className="space-y-4">
        <div className="p-4 border rounded-md">
          <p className="text-sm text-muted-foreground">Live sessions coming soon</p>
        </div>
      </div>
    </div>
  )
} 