import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Trophy, Book, Target, Users } from 'lucide-react'

export function EducationalDashboard() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Skill Progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Technical Analysis</span>
              <Progress value={75} className="w-1/2" />
            </div>
            <div className="flex justify-between items-center">
              <span>Fundamental Analysis</span>
              <Progress value={60} className="w-1/2" />
            </div>
            <div className="flex justify-between items-center">
              <span>Risk Management</span>
              <Progress value={80} className="w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <Trophy className="mr-1 h-3 w-3" />
              Master Chartist
            </Badge>
            <Badge variant="secondary">
              <Book className="mr-1 h-3 w-3" />
              Knowledge Seeker
            </Badge>
            <Badge variant="secondary">
              <Target className="mr-1 h-3 w-3" />
              Risk Optimizer
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Session Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Community Ranking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <span>Your Rank</span>
            </div>
            <Badge>Top 10%</Badge>
          </div>
        </CardContent>
      </Card>
      <Card>
  <CardHeader>
    <CardTitle>Course Roadmap</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
        <span>Introduction to Technical Analysis</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
        <span>Advanced Chart Patterns</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-gray-300 mr-2"></div>
        <span>Risk Management Strategies</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-gray-300 mr-2"></div>
        <span>Fundamental Analysis for Crypto</span>
      </div>
    </div>
  </CardContent>
</Card>
    </div>
  )
}

