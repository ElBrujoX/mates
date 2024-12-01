import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Zap, Users, Clock, Calendar } from 'lucide-react'

export function LiveTradingSessions() {
  const sessions = [
    {
      id: 1,
      title: "Market Opening Strategy",
      host: "Sarah Thompson",
      participants: 128,
      startTime: "09:30 AM",
      date: "2023-06-15",
      status: "live"
    },
    {
      id: 2,
      title: "Crypto Swing Trading Techniques",
      host: "Michael Chen",
      participants: 95,
      startTime: "02:00 PM",
      date: "2023-06-15",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Options Trading Masterclass",
      host: "Emily Rodriguez",
      participants: 210,
      startTime: "11:00 AM",
      date: "2023-06-16",
      status: "upcoming"
    }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Live Trading Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          {sessions.map((session) => (
            <div key={session.id} className="mb-4 p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{session.title}</h3>
                <Badge variant={session.status === 'live' ? 'default' : 'secondary'}>
                  {session.status === 'live' ? (
                    <><Zap className="mr-1 h-3 w-3" /> Live</>
                  ) : (
                    <><Calendar className="mr-1 h-3 w-3" /> Upcoming</>
                  )}
                </Badge>
              </div>
              <div className="flex items-center mb-2">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${session.host}`} />
                  <AvatarFallback>{session.host.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{session.host}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{session.participants} participants</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{session.startTime} - {session.date}</span>
                </div>
              </div>
              <Button className="w-full mt-2" variant={session.status === 'live' ? 'default' : 'outline'}>
                {session.status === 'live' ? 'Join Now' : 'Set Reminder'}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

