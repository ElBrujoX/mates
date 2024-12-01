import { Medal } from 'lucide-react'

export function Leaderboards() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Medal className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Leaderboards</h2>
      </div>
      <div className="space-y-4">
        <div className="p-4 border rounded-md">
          <p className="text-sm text-muted-foreground">Leaderboards coming soon</p>
        </div>
      </div>
    </div>
  )
} 