import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FishIcon as Whale, ArrowRight } from 'lucide-react'

export function WhaleMovements() {
  const movements = [
    { wallet: '0x1234...5678', token: 'ETH', amount: 1000, type: 'Accumulation', impact: 75 },
    { wallet: '0x9876...5432', token: 'BTC', amount: 100, type: 'Distribution', impact: 60 },
    { wallet: '0xabcd...efgh', token: 'SOL', amount: 50000, type: 'Transfer', impact: 40 },
  ]

  return (
    <div className="space-y-6">
      {movements.map((movement, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">{movement.wallet}</CardTitle>
            <Badge variant="outline">
              <Whale className="mr-1 h-4 w-4" />
              Whale
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Token</p>
                <p className="text-lg font-semibold">{movement.token}</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-lg font-semibold">{movement.amount.toLocaleString()} {movement.token}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{movement.type}</span>
                <span className="text-sm font-medium">Market Impact</span>
              </div>
              <Progress value={movement.impact} className="h-2" />
              <div className="flex justify-end">
                <span className="text-sm text-muted-foreground">{movement.impact}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

