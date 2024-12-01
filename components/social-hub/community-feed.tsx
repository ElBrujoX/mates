import { MessageSquare } from 'lucide-react'

export function CommunityFeed() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Community Feed</h2>
      </div>
      <div className="space-y-4">
        <div className="p-4 border rounded-md">
          <p className="text-sm text-muted-foreground">Community feed coming soon</p>
        </div>
      </div>
    </div>
  )
} 