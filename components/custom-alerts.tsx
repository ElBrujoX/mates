import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, Plus } from 'lucide-react'

export function CustomAlerts() {
  const [alerts, setAlerts] = useState([
    { token: 'BTC', condition: 'Price Above', value: 40000, active: true },
    { token: 'ETH', condition: 'Price Below', value: 2000, active: false },
  ])

  const addAlert = () => {
    setAlerts([...alerts, { token: '', condition: '', value: 0, active: true }])
  }

  return (
    <div className="space-y-6">
      {alerts.map((alert, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">Custom Alert {index + 1}</CardTitle>
            <Switch checked={alert.active} />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Token</label>
                <Select defaultValue={alert.token}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BTC">BTC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="SOL">SOL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Condition</label>
                <Select defaultValue={alert.condition}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Price Above">Price Above</SelectItem>
                    <SelectItem value="Price Below">Price Below</SelectItem>
                    <SelectItem value="Volume Spike">Volume Spike</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium">Value</label>
                <Input type="number" defaultValue={alert.value} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button onClick={addAlert} className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add New Alert
      </Button>
    </div>
  )
}

