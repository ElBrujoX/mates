import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, BookOpen, Trophy, TrendingUp, MessageSquare } from 'lucide-react'

export function CommunityInsights() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Study Groups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {['Technical Analysis Masters', 'Crypto Fundamentals', 'Risk Management Pros'].map((group, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>{group}</span>
                </div>
                <Button size="sm">Join</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mentor Matching</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Sarah Thompson', specialty: 'Options Trading' },
              { name: 'Michael Chen', specialty: 'Crypto Analysis' },
              { name: 'Emily Rodriguez', specialty: 'Risk Management' }
            ].map((mentor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${mentor.name}`} />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{mentor.name}</div>
                    <div className="text-sm text-muted-foreground">{mentor.specialty}</div>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategy Sharing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Breakout Bonanza', author: 'TradeMaster99', likes: 156 },
              { name: 'Fibonacci Frenzy', author: 'ChartWizard', likes: 132 },
              { name: 'Volatility Crusher', author: 'RiskManager21', likes: 98 }
            ].map((strategy, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{strategy.name}</div>
                  <div className="text-sm text-muted-foreground">by {strategy.author}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{strategy.likes} likes</Badge>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Win Rate</span>
              <div className="flex items-center space-x-2">
                <Progress value={68} className="w-[100px]" />
                <span className="text-sm font-medium">68%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Profit Factor</span>
              <div className="flex items-center space-x-2">
                <Progress value={75} className="w-[100px]" />
                <span className="text-sm font-medium">1.75</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Average RRR</span>
              <div className="flex items-center space-x-2">
                <Progress value={80} className="w-[100px]" />
                <span className="text-sm font-medium">1:2.5</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Achievement System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span>Master Trader</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-green-500" />
              <span>Knowledge Seeker</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <span>Consistent Performer</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-purple-500" />
              <span>Community Leader</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

