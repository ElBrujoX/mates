import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function PositionCalculator() {
  const [entryPrice, setEntryPrice] = useState(0)
  const [positionSize, setPositionSize] = useState(0)
  const [leverage, setLeverage] = useState(1)
  const [result, setResult] = useState(0)

  const calculatePosition = () => {
    const calculatedResult = entryPrice * positionSize * leverage
    setResult(calculatedResult)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Position Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="entry-price">Entry Price</Label>
          <Input
            id="entry-price"
            type="number"
            value={entryPrice}
            onChange={(e) => setEntryPrice(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="position-size">Position Size</Label>
          <Input
            id="position-size"
            type="number"
            value={positionSize}
            onChange={(e) => setPositionSize(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="leverage">Leverage</Label>
          <Input
            id="leverage"
            type="number"
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
          />
        </div>
        <Button onClick={calculatePosition}>Calculate</Button>
        {result > 0 && (
          <div className="mt-4">
            <p>Position Value: ${result.toFixed(2)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

