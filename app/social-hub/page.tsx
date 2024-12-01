'use client'

import { useState } from 'react'
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TraderProfiles } from "@/components/social-hub/trader-profiles"
import { CommunityFeed } from "@/components/social-hub/community-feed"
import { TradingTeams } from "@/components/social-hub/trading-teams"
import { EventsCalendar } from "@/components/social-hub/events-calendar"
import { AchievementGallery } from "@/components/social-hub/achievement-gallery"
import { SocialDashboard } from "@/components/social-hub/social-dashboard"

export default function SocialHubPage() {
  const [activeTab, setActiveTab] = useState("trader-profiles")

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
            Social Hub
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="flex justify-start overflow-x-auto bg-card rounded-lg shadow-sm p-1 dark:bg-gray-800">
                <TabsTrigger value="trader-profiles">Trader Profiles</TabsTrigger>
                <TabsTrigger value="community-feed">Community Feed</TabsTrigger>
                <TabsTrigger value="trading-teams">Trading Teams</TabsTrigger>
                <TabsTrigger value="events-calendar">Events Calendar</TabsTrigger>
                <TabsTrigger value="achievement-gallery">Achievement Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="trader-profiles">
                <TraderProfiles />
              </TabsContent>
              <TabsContent value="community-feed">
                <CommunityFeed />
              </TabsContent>
              <TabsContent value="trading-teams">
                <TradingTeams />
              </TabsContent>
              <TabsContent value="events-calendar">
                <EventsCalendar />
              </TabsContent>
              <TabsContent value="achievement-gallery">
                <AchievementGallery />
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <SocialDashboard />
          </div>
        </div>
      </main>
    </div>
  )
}

