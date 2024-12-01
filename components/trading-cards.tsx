'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TrendingUp, TrendingDown, BarChart2, Users, MessageSquare, ExternalLink, Share2, Camera } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TradingCardProps {
  token: string
  price: number
  change: number
  volume: string
  sentiment: 'bullish' | 'bearish' | 'neutral'
  traders: number
}

function TradingCard({ token, price, change, volume, sentiment, traders }: TradingCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [position, setPosition] = useState({ entry: 0, size: 0, stopLoss: 0, takeProfit: 0 })
  const [strategy, setStrategy] = useState('')

  const handlePositionShare = () => {
    // Implement position sharing logic here
    console.log('Sharing position:', position)
  }

  const handleStrategyShare = () => {
    // Implement strategy sharing logic here
    console.log('Sharing strategy:', strategy)
  }

  return (
    <Card className="mb-4 dark:bg-gray-800">
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <CardTitle className="text-base font-semibold">{token}</CardTitle>
        <Badge variant={sentiment === 'bullish' ? 'success' : sentiment === 'bearish' ? 'destructive' : 'secondary'}>
          {sentiment}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          <div className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span>{Math.abs(change)}%</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <span>Vol: {volume}</span>
          <span>{traders} traders</span>
        </div>
        <div className="flex justify-between mb-4">
          <Button size="sm">Buy</Button>
          <Button size="sm" variant="outline">Sell</Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="w-full">View Details</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{token} Details</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="chart">
              <TabsList>
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="orderbook">Order Book</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="contract">Contract</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
                <TabsTrigger value="position">Position</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  Interactive Chart Placeholder
                </div>
              </TabsContent>
              <TabsContent value="orderbook">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  Order Book Placeholder
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  Holder Analytics Placeholder
                </div>
              </TabsContent>
              <TabsContent value="social">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  Social Metrics Placeholder
                </div>
              </TabsContent>
              <TabsContent value="contract">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  Contract Details Placeholder
                </div>
              </TabsContent>
              <TabsContent value="activity">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                  Trading Activity Placeholder
                </div>
              </TabsContent>
              <TabsContent value="discussion">
                <div className="space-y-4">
                  <div className="h-40 bg-muted rounded-md overflow-y-auto p-2">
                    Community Discussion Placeholder
                  </div>
                  <Textarea
                    placeholder="Share your strategy..."
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                  <Button onClick={handleStrategyShare} className="w-full">
                    <Share2 className="mr-2 h-4 w-4" /> Share Strategy
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="position">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Entry Price</label>
                      <Input
                        type="number"
                        value={position.entry}
                        onChange={(e) => setPosition({ ...position, entry: parseFloat(e.target.value) })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Position Size</label>
                      <Input
                        type="number"
                        value={position.size}
                        onChange={(e) => setPosition({ ...position, size: parseFloat(e.target.value) })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Stop Loss</label>
                      <Input
                        type="number"
                        value={position.stopLoss}
                        onChange={(e) => setPosition({ ...position, stopLoss: parseFloat(e.target.value) })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Take Profit</label>
                      <Input
                        type="number"
                        value={position.takeProfit}
                        onChange={(e) => setPosition({ ...position, takeProfit: parseFloat(e.target.value) })}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={handlePositionShare} className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" /> Share Position
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Camera className="mr-2 h-4 w-4" /> Attach Screenshot
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export function TradingCards({ category }: { category: string }) {
  const dummyData: TradingCardProps[] = [
    { token: 'SOL', price: 20.15, change: 5.2, volume: '1.2M', sentiment: 'bullish', traders: 1250 },
    { token: 'BONK', price: 0.00001234, change: -2.1, volume: '500K', sentiment: 'bearish', traders: 850 },
    { token: 'RAY', price: 0.75, change: 1.8, volume: '300K', sentiment: 'neutral', traders: 620 },
  ]

  return (
    <div>
      {dummyData.map((data, index) => (
        <TradingCard key={index} {...data} />
      ))}
    </div>
  )
}

