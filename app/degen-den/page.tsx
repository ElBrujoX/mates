import Link from "next/link"
import { BarChart2, MessageSquare, Swords, Brain, Users, Radio } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

export default function DegenDen() {
  return (
    <div className="min-h-screen bg-[#faf8ff]">
      <SiteHeader />

      <main className="container px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            Welcome to the Degen Den
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your command center for advanced trading tools, market analysis, and community engagement
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <Link href="/watch-tower" className="block">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100/50">
                  <BarChart2 className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold">Watch Tower</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time market monitoring with advanced analytics and price alerts
              </p>
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  Live price feeds, market trends, and automated alerts for your favorite tokens
                </p>
              </Card>
            </div>
          </Link>

          <Link href="/trenches" className="block">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-100/50">
                  <MessageSquare className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-xl font-bold">Trenches</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Community-driven trading signals and market insights
              </p>
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  Share and discover trading opportunities with fellow traders
                </p>
              </Card>
            </div>
          </Link>

          <Link href="/battle-station" className="block">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-100/50">
                  <Swords className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-xl font-bold">Battle Station</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Compete in trading tournaments and earn rewards
              </p>
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  Join trading competitions, track your performance, and win prizes
                </p>
              </Card>
            </div>
          </Link>

          <Link href="/intel-hub" className="block">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100/50">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold">Intel Hub</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced market analysis and research tools
              </p>
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  Access professional-grade analysis tools and market research
                </p>
              </Card>
            </div>
          </Link>

          <Link href="/social-hub" className="block">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-100/50">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-xl font-bold">Social Hub</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with fellow traders and build your network
              </p>
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  Join discussions, share strategies, and collaborate with the community
                </p>
              </Card>
            </div>
          </Link>

          <Link href="/signal-station" className="block">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-yellow-100/50">
                  <Radio className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold">Signal Station</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Receive and share high-quality trading signals
              </p>
              <Card className="p-4 bg-white/80 backdrop-blur-sm">
                <p className="text-sm text-gray-600">
                  Get notified of potential trades and contribute your own insights
                </p>
              </Card>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center p-6 rounded-2xl bg-purple-50/50">
          <p className="text-gray-600">
            Visit our{" "}
            <Link href="/features" className="text-purple-600 hover:text-purple-700 font-medium">
              Features
            </Link>{" "}
            section to stay updated on the development progress of SolMates and upcoming platform enhancements.
          </p>
        </div>
      </main>
    </div>
  )
}

