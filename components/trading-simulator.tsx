import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown } from 'lucide-react'

export function TradingSimulator() {
  const [balance, setBalance] = useState(10000)
  const [position, setPosition] = useState(0)

  const handleTrade = (action: 'buy' | 'sell') => {
    // Implement trade logic here
    console.log(`${action} trade executed`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Account Balance:</span>
            <span className="font-bold">${balance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Current Position:</span>
            <span className="font-bold">{position} units</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Trading Pair</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select pair" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc-usd">BTC/USD</SelectItem>
                  <SelectItem value="eth-usd">ETH/USD</SelectItem>
                  <SelectItem value="sol-usd">SOL/USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Amount</label>
              <Input type="number" placeholder="Enter amount" />
            </div>
          </div>
          <div className="flex justify-between">
            <Button onClick={() => handleTrade('buy')} className="w-[48%]">
              <TrendingUp className="mr-2 h-4 w-4" /> Buy
            </Button>
            <Button onClick={() => handleTrade('sell')} variant="outline" className="w-[48%]">
              <TrendingDown className="mr-2 h-4 w-4" /> Sell
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

