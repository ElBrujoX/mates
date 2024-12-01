import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Shield, Users } from 'lucide-react'

export function EducationHub() {
  const resources = [
    {
      title: "Scam Prevention Guide",
      description: "Learn how to identify and avoid common crypto scams.",
      icon: Shield
    },
    {
      title: "Community Workshops",
      description: "Join live sessions with experts on crypto security.",
      icon: Users
    },
    {
      title: "Security Best Practices",
      description: "Discover the best ways to keep your crypto assets safe.",
      icon: Book
    }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {resources.map((resource, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <resource.icon className="mr-2 h-6 w-6 text-pink-500" />
              {resource.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">{resource.description}</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

