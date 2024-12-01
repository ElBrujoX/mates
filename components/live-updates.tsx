import { AlertTriangle, Bell, CheckCircle, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LiveUpdates() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Live Updates</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex items-center space-x-2 text-red-500">
          <AlertTriangle className="h-4 w-4" />
          <span>New scam: "FakeSolToken" reported</span>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
          <Bell className="h-4 w-4" />
          <span>Warning: Suspicious "MoonShot" activity</span>
        </div>
        <div className="flex items-center space-x-2 text-green-500">
          <CheckCircle className="h-4 w-4" />
          <span>"SafeSwap" verified as legitimate</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-500">
          <Clock className="h-4 w-4" />
          <span>50 SOL returned to "RugPull" victims</span>
        </div>
        <div className="flex items-center space-x-2 text-purple-500">
          <TrendingUp className="h-4 w-4" />
          <span>Risk: Increase in fake airdrop scams</span>
        </div>
      </CardContent>
    </Card>
  )
}

