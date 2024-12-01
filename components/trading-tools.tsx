import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calculator, TrendingUp, BarChart2, DollarSign, Briefcase } from 'lucide-react'

export function TradingTools() {
  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-blue-500" />
          Trading Tools
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Position Calculator</label>
            <div className="flex mt-1 space-x-2">
              <Input type="number" placeholder="Entry Price" />
              <Input type="number" placeholder="Position Size" />
              <Button>Calculate</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              <TrendingUp className="mr-2 h-4 w-4" /> Risk Assessment
            </Button>
            <Button variant="outline" className="w-full">
              <BarChart2 className="mr-2 h-4 w-4" /> Profit Tracker
            </Button>
            <Button variant="outline" className="w-full">
              <Briefcase className="mr-2 h-4 w-4" /> Portfolio Analysis
            </Button>
            <Button variant="outline" className="w-full">
              <DollarSign className="mr-2 h-4 w-4" /> Quick Trade
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

