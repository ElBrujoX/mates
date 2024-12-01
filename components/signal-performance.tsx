import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart2, TrendingUp, TrendingDown } from 'lucide-react'

export function SignalPerformance() {
  const performances = [
    { token: 'BTC/USDT', successRate: 75, avgProfit: 5.2, totalSignals: 100 },
    { token: 'ETH/USDT', successRate: 68, avgProfit: 4.8, totalSignals: 85 },
    { token: 'SOL/USDT', successRate: 72, avgProfit: 6.1, totalSignals: 50 },
  ]

  return (
    <div className="space-y-6">
      {performances.map((performance, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">{performance.token}</CardTitle>
            <Badge variant="outline">
              <BarChart2 className="mr-1 h-4 w-4" />
              Performance
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Success Rate</span>
                  <span className="text-sm font-medium">{performance.successRate}%</span>
                </div>
                <Progress value={performance.successRate} className="h-2" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Profit</p>
                  <p className="text-lg font-semibold">
                    <TrendingUp className="inline mr-1 h-4 w-4 text-green-500" />
                    {performance.avgProfit}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Signals</p>
                  <p className="text-lg font-semibold">{performance.totalSignals}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

