import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Trophy, TrendingUp } from 'lucide-react'

export function TradingTeams() {
  const teams = [
    { name: "Alpha Wolves", members: 5, performance: "+12.5%", rank: 1 },
    { name: "Beta Bears", members: 4, performance: "+8.7%", rank: 2 },
    { name: "Gamma Geckos", members: 6, performance: "+6.2%", rank: 3 },
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-500" />
            Top Trading Teams
          </CardTitle>
        </CardHeader>
        <CardContent>
          {teams.map((team, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
              <div>
                <h3 className="font-semibold">{team.name}</h3>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Users className="mr-1 h-4 w-4" /> {team.members} members
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-500 flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4" /> {team.performance}
                </div>
                <div className="text-sm text-muted-foreground flex items-center justify-end">
                  <Trophy className="mr-1 h-4 w-4" /> Rank #{team.rank}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Button className="w-full">Create or Join a Team</Button>
    </div>
  )
}

