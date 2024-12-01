import { LifeBuoy, ArrowRight, FileText, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function RecoveryCenter() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <LifeBuoy className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Recovery Center</h2>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="p-4 border rounded-md hover:bg-accent transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-500" />
                <div>
                  <h3 className="font-medium">File a Recovery Claim</h3>
                  <p className="text-sm text-muted-foreground">Start the recovery process</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="p-4 border rounded-md hover:bg-accent transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-green-500" />
                <div>
                  <h3 className="font-medium">Talk to Recovery Expert</h3>
                  <p className="text-sm text-muted-foreground">Get professional help</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Button className="w-full">View Recovery Resources</Button>
        </div>
      </div>
    </div>
  )
} 