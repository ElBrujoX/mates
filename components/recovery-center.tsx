import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from 'lucide-react'

export function RecoveryCenter() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Report a Scam</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">If you've been a victim of a crypto scam, report it here to get help and prevent others from falling for the same trap.</p>
          <Button className="w-full bg-gradient-to-r from-[#ec4899] to-[#f43f5e] hover:opacity-90">
            Start Report <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recovery Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">Access guides, tools, and expert advice to help you recover from a crypto scam.</p>
          <Button variant="outline" className="w-full">
            View Resources <HelpCircle className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

