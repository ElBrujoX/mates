import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, BookOpen, Code, Users } from 'lucide-react'

export function LearningPaths() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current Course: Technical Analysis Mastery</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={30} className="mb-2" />
          <p className="text-sm text-muted-foreground">30% Complete</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="video">
        <TabsList>
          <TabsTrigger value="video">Video Lessons</TabsTrigger>
          <TabsTrigger value="interactive">Interactive Modules</TabsTrigger>
          <TabsTrigger value="practice">Practice Scenarios</TabsTrigger>
          <TabsTrigger value="knowledge-checks">Knowledge Checks</TabsTrigger>
          <TabsTrigger value="community-challenges">Community Challenges</TabsTrigger>
        </TabsList>
        <TabsContent value="video">
          <Card>
            <CardHeader>
              <CardTitle>Video Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    <span>Introduction to Candlestick Patterns</span>
                  </div>
                  <Button size="sm">Watch</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    <span>Support and Resistance Levels</span>
                  </div>
                  <Button size="sm">Watch</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    <span>Moving Averages and Trend Analysis</span>
                  </div>
                  <Button size="sm">Watch</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="interactive">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Identifying Chart Patterns</span>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>RSI and MACD Indicators</span>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Fibonacci Retracements</span>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle>Practice Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Trend Reversal Identification</span>
                  </div>
                  <Button size="sm">Practice</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Entry and Exit Point Analysis</span>
                  </div>
                  <Button size="sm">Practice</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    <span>Multi-Timeframe Analysis</span>
                  </div>
                  <Button size="sm">Practice</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="knowledge-checks">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Checks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Technical Analysis Fundamentals Quiz</span>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Chart Pattern Recognition Test</span>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Risk Management Scenarios</span>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="community-challenges">
          <Card>
            <CardHeader>
              <CardTitle>Community Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Weekly Trading Competition</span>
                  </div>
                  <Button size="sm">Join</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Market Analysis Hackathon</span>
                  </div>
                  <Button size="sm">Join</Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Strategy Optimization Challenge</span>
                  </div>
                  <Button size="sm">Join</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

