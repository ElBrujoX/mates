import { Calculator } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PositionCalculator() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5" />
        <h2 className="text-2xl font-semibold">Position Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="entry">Entry Price</Label>
            <Input id="entry" placeholder="0.00" type="number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="size">Position Size</Label>
            <Input id="size" placeholder="0.00" type="number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="leverage">Leverage</Label>
            <Input id="leverage" placeholder="1" type="number" />
          </div>
        </div>

        <div className="space-y-4">
          <Button className="w-full">Calculate</Button>
          <div className="p-4 border rounded-md">
            <p className="text-sm text-muted-foreground text-center">Position details will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
} 