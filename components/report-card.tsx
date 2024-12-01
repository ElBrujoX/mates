'use client'

import { useState } from 'react'
import { AlertTriangle, ChevronDown, ChevronUp, ThumbsDown, ThumbsUp, ExternalLink, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ReportCardProps {
  risk: 'high' | 'medium' | 'low'
  project: string
  token: string
  lossAmount: number
  timeReported: string
  votes: number
  verified: boolean
  status: 'open' | 'investigating' | 'resolved'
}

export function ReportCard({ risk, project, token, lossAmount, timeReported, votes, verified, status }: ReportCardProps) {
  const [expanded, setExpanded] = useState(false)

  const riskColor = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  }

  const statusColor = {
    open: 'bg-blue-500',
    investigating: 'bg-yellow-500',
    resolved: 'bg-green-500'
  }

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <CardTitle className="text-base font-semibold">{project}</CardTitle>
        <div className="flex space-x-2">
          <Badge className={`${riskColor[risk]} text-white text-xs`}>{risk} risk</Badge>
          <Badge className={`${statusColor[status]} text-white text-xs`}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xs text-muted-foreground mb-2">
          <span>{token}</span>
          <span className="mx-1">|</span>
          <span>{lossAmount} SOL</span>
          <span className="mx-1">|</span>
          <span>{timeReported}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ThumbsUp className="mr-1 h-3 w-3" />
              <span className="text-xs">{votes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ThumbsDown className="mr-1 h-3 w-3" />
            </Button>
          </div>
          {verified ? (
            <Badge variant="outline" className="bg-green-100 text-green-800 text-xs">Verified</Badge>
          ) : (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 text-xs">Pending</Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 w-full justify-between h-8"
        >
          <span className="text-xs">{expanded ? "Hide Details" : "Show Details"}</span>
          {expanded ? <ChevronUp className="ml-2 h-3 w-3" /> : <ChevronDown className="ml-2 h-3 w-3" />}
        </Button>
        {expanded && (
          <div className="mt-2 pt-2 border-t border-border text-xs">
            <h4 className="font-semibold mb-1">Incident Report</h4>
            <p className="text-muted-foreground mb-2">
              Detailed description of the scam incident...
            </p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <h5 className="font-semibold mb-1">Evidence</h5>
                <ul className="text-muted-foreground list-disc list-inside">
                  <li>Screenshot 1</li>
                  <li>Transaction hash</li>
                  <li>Website link</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Investigation Progress</h5>
                <Progress value={33} className="h-2 mb-1" />
                <p className="text-muted-foreground">
                  Our team is currently investigating this report...
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Button variant="outline" size="sm" className="h-8 text-xs">
                <ExternalLink className="mr-1 h-3 w-3" />
                View Full Report
              </Button>
              <Button variant="outline" size="sm" className="h-8 text-xs">
                <MessageSquare className="mr-1 h-3 w-3" />
                Join Discussion
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

