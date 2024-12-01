import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'SOL', volume: 1200000 },
  { name: 'BONK', volume: 500000 },
  { name: 'RAY', volume: 300000 },
  { name: 'STEP', volume: 150000 },
  { name: 'SAMO', volume: 100000 },
]

export function TokenAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Traded Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="volume" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

