'use client'

import { useState } from 'react'
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Radio, FishIcon as Whale, Brain, BarChart2, Bell } from 'lucide-react'
import { LiveSignals } from "@/components/signal-station/live-signals"
import { WhaleMovements } from "@/components/signal-station/whale-movements"
import { SmartMoneyTracking } from "@/components/signal-station/smart-money-tracking"
import { SignalPerformance } from "@/components/signal-station/signal-performance"
import { CustomAlerts } from "@/components/signal-station/custom-alerts"

export default function SignalStationPage() {
  const [activeTab, setActiveTab] = useState("live-signals")

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Signal Station
          </h1>
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Manage Alerts
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="flex justify-start overflow-x-auto bg-card rounded-lg shadow-sm p-1 dark:bg-gray-800">
            <TabsTrigger value="live-signals" className="flex-shrink-0">
              <Radio className="mr-2 h-4 w-4" /> Live Signals
            </TabsTrigger>
            <TabsTrigger value="whale-movements" className="flex-shrink-0">
              <Whale className="mr-2 h-4 w-4" /> Whale Movements
            </TabsTrigger>
            <TabsTrigger value="smart-money-tracking" className="flex-shrink-0">
              <Brain className="mr-2 h-4 w-4" /> Smart Money Tracking
            </TabsTrigger>
            <TabsTrigger value="signal-performance" className="flex-shrink-0">
              <BarChart2 className="mr-2 h-4 w-4" /> Signal Performance
            </TabsTrigger>
            <TabsTrigger value="custom-alerts" className="flex-shrink-0">
              <Bell className="mr-2 h-4 w-4" /> Custom Alerts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live-signals">
            <LiveSignals />
          </TabsContent>
          <TabsContent value="whale-movements">
            <WhaleMovements />
          </TabsContent>
          <TabsContent value="smart-money-tracking">
            <SmartMoneyTracking />
          </TabsContent>
          <TabsContent value="signal-performance">
            <SignalPerformance />
          </TabsContent>
          <TabsContent value="custom-alerts">
            <CustomAlerts />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

