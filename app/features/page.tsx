import Link from "next/link"
import { Video, MessageSquare, BarChart3, Shield, Users, Brain, Trophy, Radio } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"

const features = [
  {
    icon: Video,
    title: "Video Chat",
    description: "Connect with traders in real-time through secure video calls",
    progress: 75,
    status: "In-Progress"
  },
  {
    icon: BarChart3,
    title: "Watch Tower",
    description: "Real-time market monitoring with advanced analytics and price alerts",
    progress: 80,
    status: "In-Progress"
  },
  {
    icon: MessageSquare,
    title: "Trenches",
    description: "Community-driven trading signals and market insights",
    progress: 65,
    status: "In-Progress"
  },
  {
    icon: Trophy,
    title: "Battle Station",
    description: "Compete in trading tournaments and earn rewards",
    progress: 70,
    status: "In-Progress"
  },
  {
    icon: Brain,
    title: "Intel Hub",
    description: "Advanced market analysis and research tools",
    progress: 60,
    status: "In-Progress"
  },
  {
    icon: Users,
    title: "Social Hub",
    description: "Connect with fellow traders and build your network",
    progress: 55,
    status: "In-Progress"
  },
  {
    icon: Radio,
    title: "Signal Station",
    description: "Receive and share high-quality trading signals",
    progress: 50,
    status: "In-Progress"
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] pb-16">
      {/* Navigation */}
      <SiteHeader />

      {/* Main Content */}
      <main className="container px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-4">
            Building the Future 🚀
          </p>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            Features In Development
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us on our journey to build the ultimate crypto trading platform. Get early access and shape the future of decentralized trading.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border border-gray-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <Badge 
                        variant={feature.status === "In-Progress" ? "default" : "secondary"}
                        className="rounded-full"
                      >
                        {feature.status}
                      </Badge>
                      <span className="text-gray-600">{feature.progress}%</span>
                    </div>
                    <Progress value={feature.progress} className="h-1" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}

