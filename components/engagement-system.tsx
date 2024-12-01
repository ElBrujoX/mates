import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Zap, Users, Award, Gift } from 'lucide-react'

export function EngagementSystem() {
  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Engagement System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-between">
            <span className="flex items-center">
              <Zap className="mr-2 h-4 w-4 text-blue-500" />
              Daily Challenges
            </span>
            <span className="text-sm text-muted-foreground">3 active</span>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-between">
            <span className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-green-500" />
              Team Battles
            </span>
            <span className="text-sm text-muted-foreground">Join now</span>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-between">
            <span className="flex items-center">
              <Award className="mr-2 h-4 w-4 text-purple-500" />
              Achievement Tracking
            </span>
            <span className="text-sm text-muted-foreground">5 new</span>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-between">
            <span className="flex items-center">
              <Gift className="mr-2 h-4 w-4 text-red-500" />
              Reward Distribution
            </span>
            <span className="text-sm text-muted-foreground">Claim rewards</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

