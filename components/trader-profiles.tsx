import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function TraderProfiles() {
  const traders = [
    { name: "Alice Johnson", handle: "@crypto_alice", avatar: "/avatars/alice.jpg", badges: ["Top Performer", "Team Leader"] },
    { name: "Bob Smith", handle: "@bob_trades", avatar: "/avatars/bob.jpg", badges: ["Rising Star"] },
    { name: "Carol Williams", handle: "@carol_crypto", avatar: "/avatars/carol.jpg", badges: ["Mentor", "Long-term Holder"] },
  ]

  return (
    <div className="space-y-6">
      {traders.map((trader, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={trader.avatar} alt={trader.name} />
              <AvatarFallback>{trader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{trader.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{trader.handle}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {trader.badges.map((badge, badgeIndex) => (
                <Badge key={badgeIndex} variant="secondary">{badge}</Badge>
              ))}
            </div>
            <Button className="w-full">View Profile</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

