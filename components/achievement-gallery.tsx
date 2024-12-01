import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star } from 'lucide-react'

export function AchievementGallery() {
  const achievements = [
    { title: "Master Trader", description: "Achieved 100 successful trades", icon: Trophy },
    { title: "Community Leader", description: "Started a trading group with 50+ members", icon: Award },
    { title: "Rising Star", description: "Consistent profit for 3 months straight", icon: Star },
  ]

  return (
    <div className="space-y-6">
      {achievements.map((achievement, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary rounded-full">
              <achievement.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle>{achievement.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <Badge variant="outline">Level 1</Badge>
              <span className="text-sm text-muted-foreground">Earned on May 15, 2023</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

