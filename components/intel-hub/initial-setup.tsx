import { Zap } from 'lucide-react'

export function InitialSetup() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Initial Setup</h2>
      </div>
      <div className="space-y-4">
        <div className="p-4 border rounded-md">
          <p className="text-sm text-muted-foreground">Setup guide coming soon</p>
        </div>
      </div>
    </div>
  )
} 