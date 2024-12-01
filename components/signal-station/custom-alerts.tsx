import { Bell, Plus, Settings2, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function CustomAlerts() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          <h2 className="text-2xl font-semibold">Custom Alerts</h2>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" /> New Alert
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 border rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Price Movement Alert</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Alert when SOL moves ±5% in 1h
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked />
              <Button variant="ghost" size="icon">
                <Settings2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Whale Transaction Alert</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Alert on transactions over 1000 SOL
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked />
              <Button variant="ghost" size="icon">
                <Settings2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 