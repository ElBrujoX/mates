import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', scams: 65, recoveries: 40 },
  { name: 'Feb', scams: 59, recoveries: 35 },
  { name: 'Mar', scams: 80, recoveries: 55 },
  { name: 'Apr', scams: 81, recoveries: 60 },
  { name: 'May', scams: 56, recoveries: 45 },
  { name: 'Jun', scams: 55, recoveries: 50 },
]

export function Analytics() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Scam Trends and Recovery Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="scams" fill="#8884d8" />
              <Bar dataKey="recoveries" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Scams Reported</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">396</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Funds Recovered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">285 SOL</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Community Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,250 Users Protected</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

