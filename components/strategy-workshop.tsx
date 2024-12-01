import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LineChartIcon as ChartLineUp, ScaleIcon as Scales, DollarSign, Percent, ArrowRightFromLine } from 'lucide-react'

export function StrategyWorkshop() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Strategy Workshop</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="strategy-name">Strategy Name</Label>
          <Input id="strategy-name" placeholder="Enter strategy name" />
        </div>

        <div className="space-y-2">
          <Label>Trading Pair</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select trading pair" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="btc-usd">BTC/USD</SelectItem>
              <SelectItem value="eth-usd">ETH/USD</SelectItem>
              <SelectItem value="sol-usd">SOL/USD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Time Frame</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 minute</SelectItem>
              <SelectItem value="5m">5 minutes</SelectItem>
              <SelectItem value="15m">15 minutes</SelectItem>
              <SelectItem value="1h">1 hour</SelectItem>
              <SelectItem value="4h">4 hours</SelectItem>
              <SelectItem value="1d">1 day</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Risk Level</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="use-leverage" />
          <Label htmlFor="use-leverage">Use Leverage</Label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button className="w-full">
            <ChartLineUp className="mr-2 h-4 w-4" />
            Back Test
          </Button>
          <Button className="w-full">
            <Scales className="mr-2 h-4 w-4" />
            Risk Analysis
          </Button>
          <Button className="w-full">
            <DollarSign className="mr-2 h-4 w-4" />
            Position Sizing
          </Button>
          <Button className="w-full">
            <Percent className="mr-2 h-4 w-4" />
            Set Take Profit/Stop Loss
          </Button>
          <Button className="w-full">
            <ArrowRightFromLine className="mr-2 h-4 w-4" />
            Exit Strategies
          </Button>
        </div>

        <Button className="w-full">Save Strategy</Button>
      </CardContent>
    </Card>
  )
}

