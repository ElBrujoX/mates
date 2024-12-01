import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Clock, Users } from 'lucide-react'

export function TradingCompetitions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Trading Competitions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Solana Summer Showdown</h3>
              <div className="text-sm text-muted-foreground flex items-center">
                <Clock className="mr-1 h-4 w-4" /> Ends in 2d 14h
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">$10,000 Prize Pool</div>
              <div className="text-sm text-muted-foreground flex items-center justify-end">
                <Users className="mr-1 h-4 w-4" /> 128 Participants
              </div>
            </div>
          </div>
          <Button className="w-full">Join Competition</Button>
        </div>
      </CardContent>
    </Card>
  )
}

