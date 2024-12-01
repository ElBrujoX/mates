import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, TrendingDown } from 'lucide-react'

export function SmartMoneyTracking() {
  const smartMoneyMoves = [
    { token: 'BTC', action: 'Accumulating', confidence: 'High', trend: 'Bullish' },
    { token: 'ETH', action: 'Holding', confidence: 'Medium', trend: 'Neutral' },
    { token: 'SOL', action: 'Distributing', confidence: 'Low', trend: 'Bearish' },
  ]

  return (
    <div className="space-y-6">
      {smartMoneyMoves.map((move, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold">{move.token}</CardTitle>
            <Badge variant={move.trend === 'Bullish' ? 'success' : move.trend === 'Bearish' ? 'destructive' : 'secondary'}>
              {move.trend === 'Bullish' ? <TrendingUp className="mr-1 h-4 w-4" /> : move.trend === 'Bearish' ? <TrendingDown className="mr-1 h-4 w-4" /> : null}
              {move.trend}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Smart Money Action</p>
                <p className="text-lg font-semibold">{move.action}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Confidence</p>
                <Badge variant={move.confidence === 'High' ? 'success' : move.confidence === 'Medium' ? 'warning' : 'secondary'}>
                  {move.confidence}
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Brain className="h-16 w-16 text-primary" />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Smart money is currently {move.action.toLowerCase()} {move.token} with {move.confidence.toLowerCase()} confidence.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

