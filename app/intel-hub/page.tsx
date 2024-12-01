'use client'

import { useState } from 'react'
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Zap, Lightbulb, Search, Users } from 'lucide-react'
import { InitialSetup } from "@/components/intel-hub/initial-setup"
import { EducationalDashboard } from "@/components/intel-hub/educational-dashboard"
import { LearningPaths } from "@/components/intel-hub/learning-paths"
import { LiveTradingSessions } from "@/components/intel-hub/live-trading-sessions"
import { StrategyWorkshop } from "@/components/intel-hub/strategy-workshop"
import { TradingSimulator } from "@/components/intel-hub/trading-simulator"
import { ResearchTools } from "@/components/intel-hub/research-tools"
import { CommunityInsights } from "@/components/intel-hub/community-insights"

export default function IntelHubPage() {
  const [activeTab, setActiveTab] = useState("learning-paths")
  const [showInitialSetup, setShowInitialSetup] = useState(true)

  const handleSetupComplete = () => {
    setShowInitialSetup(false)
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4 md:mb-0">
            Intel Hub
          </h1>
          <Button variant="outline" onClick={() => setShowInitialSetup(true)}>
            Start Skill Assessment
          </Button>
        </div>

        {showInitialSetup ? (
          <InitialSetup onComplete={handleSetupComplete} />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="flex flex-wrap justify-start overflow-x-auto bg-card rounded-lg shadow-sm p-1 dark:bg-gray-800">
              <TabsTrigger value="learning-paths" className="flex-shrink-0">
                <BookOpen className="mr-2 h-4 w-4" /> Learning Paths
              </TabsTrigger>
              <TabsTrigger value="live-trading" className="flex-shrink-0">
                <Zap className="mr-2 h-4 w-4" /> Live Trading Sessions
              </TabsTrigger>
              <TabsTrigger value="strategy-workshop" className="flex-shrink-0">
                <Lightbulb className="mr-2 h-4 w-4" /> Strategy Workshop
              </TabsTrigger>
              <TabsTrigger value="research-tools" className="flex-shrink-0">
                <Search className="mr-2 h-4 w-4" /> Research Tools
              </TabsTrigger>
              <TabsTrigger value="community-insights" className="flex-shrink-0">
                <Users className="mr-2 h-4 w-4" /> Community Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="learning-paths">
              <div className="grid gap-6 md:grid-cols-2">
                <EducationalDashboard />
                <LearningPaths />
              </div>
            </TabsContent>
            <TabsContent value="live-trading">
              <LiveTradingSessions />
            </TabsContent>
            <TabsContent value="strategy-workshop">
              <div className="grid gap-6 md:grid-cols-2">
                <StrategyWorkshop />
                <TradingSimulator />
              </div>
            </TabsContent>
            <TabsContent value="research-tools">
              <ResearchTools />
            </TabsContent>
            <TabsContent value="community-insights">
              <CommunityInsights />
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}

