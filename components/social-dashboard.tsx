import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Users, Calendar } from 'lucide-react'

export function SocialDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/alice.jpg" alt="Alice" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <p className="text-sm">Alice shared a new trading strategy</p>
            </li>
            <li className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/bob.jpg" alt="Bob" />
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
              <p className="text-sm">Bob joined the Alpha Wolves trading team</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Connection Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/carol.jpg" alt="Carol" />
                  <AvatarFallback>CW</AvatarFallback>
                </Avatar>
                <p className="text-sm">Carol Williams</p>
              </div>
              <Button size="sm">Connect</Button>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/david.jpg" alt="David" />
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
                <p className="text-sm">David Lee</p>
              </div>
              <Button size="sm">Connect</Button>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-blue-500" />
              <p className="text-sm">New event: Crypto Meetup tomorrow</p>
            </li>
            <li className="flex items-center gap-4">
              <Users className="h-5 w-5 text-green-500" />
              <p className="text-sm">Your post received 10 new likes</p>
            </li>
            <li className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-purple-500" />
              <p className="text-sm">Reminder: Trading workshop in 2 days</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

