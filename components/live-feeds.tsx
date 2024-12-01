import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, BarChart2, Users, Zap, FishIcon as Whale, MessageSquare } from 'lucide-react'

export function LiveFeeds() {
  return (
    <Card className="bg-card shadow-sm dark:bg-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Live Feeds</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-green-500">
            <span className="text-sm font-medium">Price Feeds</span>
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-sm">SOL: $20.15 (+5.2%)</div>
          <div className="text-sm">BTC: $42,150 (+1.3%)</div>
          <div className="text-sm">ETH: $2,350 (-0.5%)</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-blue-500">
            <span className="text-sm font-medium">Trading Volume</span>
            <BarChart2 className="h-4 w-4" />
          </div>
          <div className="text-sm">SOL: 1.2M</div>
          <div className="text-sm">BONK: 500K</div>
          <div className="text-sm">RAY: 300K</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-purple-500">
            <span className="text-sm font-medium">Social Sentiment</span>
            <Users className="h-4 w-4" />
          </div>
          <div className="text-sm">SOL: Bullish</div>
          <div className="text-sm">BONK: Neutral</div>
          <div className="text-sm">RAY: Bearish</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-yellow-500">
            <span className="text-sm font-medium">Whale Movements</span>
            <Whale className="h-4 w-4" />
          </div>
          <div className="text-sm">10K SOL moved to exchange</div>
          <div className="text-sm">5M BONK accumulated</div>
          <div className="text-sm">Large RAY position opened</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-pink-500">
            <span className="text-sm font-medium">Community Signals</span>
            <MessageSquare className="h-4 w-4" />
          </div>
          <div className="text-sm">SOL: Breakout expected</div>
          <div className="text-sm">BONK: Accumulation phase</div>
          <div className="text-sm">RAY: Potential reversal</div>
        </div>
      </CardContent>
    </Card>
  )
}

