'use client'

import { VerifiedScam } from '@/types/watch-tower'
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Shield, ExternalLink, Users, AlertTriangle, ArrowUpRight } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { cn } from "@/lib/utils"

interface VerifiedScamsProps {
  scams: VerifiedScam[]
  loading: boolean
}

export function VerifiedScams({ scams, loading }: VerifiedScamsProps) {
  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Verified Scams</h2>
          <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            {scams.length} Verified
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Shield className="w-4 h-4 mr-2" />
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {scams.length === 0 ? (
          <p className="text-sm text-muted-foreground">No verified scams yet</p>
        ) : (
          scams.map((scam) => (
            <ScamCard key={scam.id} scam={scam} />
          ))
        )}
      </div>
    </Card>
  )
}

interface ScamCardProps {
  scam: VerifiedScam
}

function ScamCard({ scam }: ScamCardProps) {
  const scamTypeColors = {
    'Token Scam': 'text-purple-600',
    'Liquidity Scam': 'text-blue-600',
    'Phishing': 'text-orange-600',
    'Honeypot': 'text-red-600',
    'Other': 'text-gray-600'
  }

  return (
    <div className="p-4 border rounded-lg space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium">{scam.description}</h3>
            <span className={cn(
              "text-sm font-medium",
              scamTypeColors[scam.scam_type as keyof typeof scamTypeColors] || scamTypeColors.Other
            )}>
              {scam.scam_type}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Verified {formatDistanceToNow(new Date(scam.verified_at))} ago
          </p>
        </div>
        {scam.total_loss > 0 && (
          <div className="px-2 py-1 rounded bg-red-50 text-red-600 text-sm font-medium">
            {scam.total_loss} SOL lost
          </div>
        )}
      </div>

      {scam.contract_address && (
        <div className="flex items-center gap-2">
          <code className="px-2 py-1 rounded bg-muted text-xs">{scam.contract_address}</code>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        {scam.victims_count > 0 && (
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {scam.victims_count} victims
          </div>
        )}
        {scam.related_cases && scam.related_cases.length > 0 && (
          <div className="flex items-center gap-1">
            <AlertTriangle className="w-4 h-4" />
            {scam.related_cases.length} related cases
          </div>
        )}
      </div>

      {scam.evidence_links && scam.evidence_links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {scam.evidence_links.map((link, i) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              className="h-7"
              onClick={() => window.open(link, '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Evidence {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-9 w-24" />
      </div>
      <div className="space-y-4">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-7 w-24 rounded" />
            </div>
            <Skeleton className="h-8 w-64" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-7 w-24" />
              <Skeleton className="h-7 w-24" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
