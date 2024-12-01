import { Swords, Trophy, Users, Clock, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BattleStationCard() {
  return (
    <Card className="bg-pink-100 border-none">
      <CardHeader className="flex flex-row items-center gap-2">
        <Swords className="h-6 w-6" />
        <CardTitle className="text-xl font-bold">Battle Station</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Compete in trading tournaments and earn rewards
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Card className="bg-white">
            <CardHeader className="p-3">
              <CardTitle className="text-sm font-medium">Active Tournaments</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">5</span>
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="p-3">
              <CardTitle className="text-sm font-medium">Total Prize Pool</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$50K</span>
                <Zap className="h-5 w-5 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-white">
          <CardHeader className="p-3">
            <CardTitle className="text-sm font-medium">Featured Tournament</CardTitle>
          </CardHeader>
          <CardContent className="p-3 space-y-2">
            <h3 className="font-semibold">Solana Summer Showdown</h3>
            <div className="flex items-center space-x-2 text-sm">
              <Users className="h-4 w-4" />
              <span>128 Participants</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Ends in 2d 14h</span>
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">$10K Prize</Badge>
              <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Join Now
              </button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

