'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

export function AIInsights() {
  const [insights, setInsights] = useState<string[]>([])

  // Simulated AI analysis (in a real scenario, this would be connected to a backend AI service)
  useEffect(() => {
    const simulatedInsights = [
      "Bullish sentiment detected for BTC",
      "Potential breakout for ETH in the next 24 hours",
      "Unusual trading volume observed for SOL",
    ]
    setInsights(simulatedInsights)
  }, [])

  return (
    <Card className="bg-gray-900 text-white">
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <CardTitle className="text-xl font-bold flex items-center">
          <Brain className="mr-2 h-5 w-5 text-purple-400" />
          AI Trading Insights
        </CardTitle>
        <Badge variant="outline" className="bg-purple-900 text-purple-100">Live</Badge>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              {index === 0 ? (
                <TrendingUp className="mr-2 h-4 w-4 text-green-400 mt-1" />
              ) : index === 1 ? (
                <AlertCircle className="mr-2 h-4 w-4 text-yellow-400 mt-1" />
              ) : (
                <TrendingDown className="mr-2 h-4 w-4 text-red-400 mt-1" />
              )}
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

