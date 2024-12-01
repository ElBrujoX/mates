import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Clock, BarChart2 } from 'lucide-react'

export function LiveSignals() {
  const signals = [
    { token: 'BTC/USDT', type: 'Long', entry: 35000, target: 37000, stopLoss: 34000, timeFrame: '4h', probability: 75 },
    { token: 'ETH/USDT', type: 'Short', entry: 2200, target: 2000, stopLoss: 2300, timeFrame: '1h', probability: 65 },
    { token: 'SOL/USDT', type: 'Long', entry: 80, target: 90, stopLoss: 75, timeFrame: '1d', probability: 80 },
  ]

  return (
    <div className="space-y-6">
      {signals.map((signal, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">{signal.token}</CardTitle>
            <Badge variant={signal.type === 'Long' ? 'success' : 'destructive'}>
              {signal.type === 'Long' ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
              {signal.type}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Entry</p>
                <p className="text-lg font-semibold">${signal.entry}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Target</p>
                <p className="text-lg font-semibold">${signal.target}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stop Loss</p>
                <p className="text-lg font-semibold">${signal.stopLoss}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time Frame</p>
                <p className="text-lg font-semibold">{signal.timeFrame}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Posted 2h ago</span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">{signal.probability}% Success Probability</span>
              </div>
            </div>
            <Button className="w-full mt-4">Take This Signal</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

