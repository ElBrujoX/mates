'use client'

import { useState } from 'react'
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MessageSquare, TrendingUp, Zap, Trophy, Users } from 'lucide-react'
import { LiveFeeds } from "@/components/trenches/live-feeds"
import { TradingCards } from "@/components/trenches/trading-cards"
import { GlobalChat } from "@/components/trenches/global-chat"
import { TradingCompetitions } from "@/components/trenches/trading-competitions"
import { TokenAnalytics } from "@/components/trenches/token-analytics"
import { TradingTeams } from "@/components/trenches/trading-teams"
import { TradingTools } from "@/components/trenches/trading-tools"
import { EngagementSystem } from "@/components/trenches/engagement-system"

export default function TrenchesPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 flex">
        <main className={`flex-grow transition-all duration-300 ${isChatOpen ? 'mr-80' : ''}`}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              The Trenches
            </h1>
            <Button onClick={() => setIsChatOpen(!isChatOpen)} variant={isChatOpen ? "secondary" : "outline"}>
              <MessageSquare className="mr-2 h-4 w-4" /> {isChatOpen ? "Close Chat" : "Global Chat"}
            </Button>
          </div>
          <LiveFeeds />
          <Tabs defaultValue="hot-right-now" className="mt-6">
            <TabsList className="flex justify-start overflow-x-auto bg-card rounded-lg shadow-sm p-1 dark:bg-gray-800">
              <TabsTrigger value="hot-right-now" className="flex-shrink-0">
                <TrendingUp className="mr-2 h-4 w-4" /> Hot Right Now
              </TabsTrigger>
              <TabsTrigger value="potential-gems" className="flex-shrink-0">
                <Zap className="mr-2 h-4 w-4" /> Potential Gems
              </TabsTrigger>
              <TabsTrigger value="degen-plays" className="flex-shrink-0">
                <Trophy className="mr-2 h-4 w-4" /> Degen Plays
              </TabsTrigger>
              <TabsTrigger value="success-stories" className="flex-shrink-0">
                <Users className="mr-2 h-4 w-4" /> Success Stories
              </TabsTrigger>
              <TabsTrigger value="trading-teams" className="flex-shrink-0">
                <Users className="mr-2 h-4 w-4" /> Trading Teams
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hot-right-now">
              <TradingCards category="hot" />
            </TabsContent>
            <TabsContent value="potential-gems">
              <TradingCards category="gems" />
            </TabsContent>
            <TabsContent value="degen-plays">
              <TradingCards category="degen" />
            </TabsContent>
            <TabsContent value="success-stories">
              <TradingCards category="success" />
            </TabsContent>
            <TabsContent value="trading-teams">
              <TradingTeams />
            </TabsContent>
          </Tabs>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <TradingCompetitions />
            <TokenAnalytics />
            <TradingTools />
            <EngagementSystem />
          </div>
        </main>
        {isChatOpen && (
          <div className="w-80 fixed right-0 top-16 bottom-0 bg-card border-l border-border overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <GlobalChat />
          </div>
        )}
      </div>
    </div>
  )
}

