'use client'

import { TrendingUp, AlertTriangle, Users, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RiskIndicator } from '@/types/watch-tower'
import { Skeleton } from "@/components/ui/skeleton"
import { formatDistanceToNow } from 'date-fns'
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface TrendingWarningsProps {
  indicators: RiskIndicator[]
  loading: boolean
}

export function TrendingWarnings({ indicators, loading }: TrendingWarningsProps) {
  if (loading) {
    return <LoadingSkeleton />
  }

  const criticalIndicators = indicators.filter(i => i.severity === 'critical' && i.is_active)
  const highIndicators = indicators.filter(i => i.severity === 'high' && i.is_active)
  const mediumIndicators = indicators.filter(i => i.severity === 'medium' && i.is_active)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Trending Warnings</h2>
        <Button variant="outline" size="sm">
          <TrendingUp className="w-4 h-4 mr-2" />
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {criticalIndicators.length === 0 && highIndicators.length === 0 && mediumIndicators.length === 0 ? (
          <p className="text-sm text-muted-foreground">No active warnings</p>
        ) : (
          <>
            {criticalIndicators.map((indicator) => (
              <WarningCard
                key={indicator.id}
                indicator={indicator}
                severity="critical"
              />
            ))}
            {highIndicators.map((indicator) => (
              <WarningCard
                key={indicator.id}
                indicator={indicator}
                severity="high"
              />
            ))}
            {mediumIndicators.map((indicator) => (
              <WarningCard
                key={indicator.id}
                indicator={indicator}
                severity="medium"
              />
            ))}
          </>
        )}
      </div>
    </Card>
  )
}

interface WarningCardProps {
  indicator: RiskIndicator
  severity: 'critical' | 'high' | 'medium'
}

function WarningCard({ indicator, severity }: WarningCardProps) {
  const severityStyles = {
    critical: 'bg-red-50 border-red-200',
    high: 'bg-orange-50 border-orange-200',
    medium: 'bg-yellow-50 border-yellow-200'
  }

  const iconStyles = {
    critical: 'text-red-600',
    high: 'text-orange-600',
    medium: 'text-yellow-600'
  }

  const metadata = indicator.metadata as {
    affected_users?: number
    related_links?: string[]
  }

  return (
    <div className={cn(
      "p-4 rounded-lg border space-y-3",
      severityStyles[severity]
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <AlertTriangle className={cn(
            "w-5 h-5 mt-0.5",
            iconStyles[severity]
          )} />
          <div>
            <h3 className="font-medium">{indicator.indicator_type}</h3>
            <p className="text-sm text-muted-foreground">
              Active for {formatDistanceToNow(new Date(indicator.created_at))}
            </p>
          </div>
        </div>
        {metadata?.affected_users && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            {metadata.affected_users}
          </div>
        )}
      </div>

      <p className="text-sm">{indicator.description}</p>

      {metadata?.related_links && metadata.related_links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {metadata.related_links.map((link, i) => (
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
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-9 w-24" />
      </div>
      <div className="space-y-4">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Skeleton className="w-5 h-5 rounded-full" />
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="w-12 h-4" />
            </div>
            <Skeleton className="h-4 w-full" />
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
