import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export function EventsCalendar() {
  const events = [
    { date: new Date(2023, 5, 15), title: "Crypto Meetup", type: "social" },
    { date: new Date(2023, 5, 20), title: "Trading Workshop", type: "educational" },
    { date: new Date(2023, 5, 25), title: "Market Analysis Webinar", type: "educational" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={new Date()}
            className="rounded-md border"
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Event List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.date.toDateString()}</p>
                </div>
                <div>
                  <Badge variant={event.type === 'social' ? 'default' : 'secondary'}>
                    {event.type}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

