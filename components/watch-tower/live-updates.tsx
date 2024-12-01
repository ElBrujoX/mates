'use client'

import { AlertCircle, Shield, Clock, TrendingUp } from 'lucide-react'
import { LiveUpdate } from '@/types/watch-tower'
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { formatDistanceToNow } from 'date-fns'

interface LiveUpdatesProps {
  updates: LiveUpdate[]
  loading: boolean
}

export function LiveUpdates({ updates, loading }: LiveUpdatesProps) {
  if (loading) {
    return <LoadingSkeleton />
  }

  const activeAlerts = updates.filter(u => u.update_type === 'scam_alert' && u.is_active)
  const activeRisks = updates.filter(u => u.update_type === 'risk_indicator' && u.is_active)
  const verifications = updates.filter(u => u.update_type === 'verification')
  const recoveryUpdates = updates.filter(u => u.update_type === 'recovery')

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Live Updates</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className={cn(
          "p-4 rounded-lg border",
          activeAlerts.length > 0 ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-200"
        )}>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className={cn(
              "w-4 h-4",
              activeAlerts.length > 0 ? "text-red-500" : "text-gray-500"
            )} />
            <p className={cn(
              "font-medium",
              activeAlerts.length > 0 ? "text-red-500" : "text-gray-500"
            )}>Active Alerts</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {activeAlerts.length > 0 ? `${activeAlerts.length} active alerts` : 'No active alerts'}
          </p>
          {activeAlerts.length > 0 && (
            <div className="mt-2 space-y-1">
              {activeAlerts.slice(0, 2).map((alert) => (
                <p key={alert.id} className="text-xs text-red-600 truncate">
                  {alert.title} • {formatDistanceToNow(new Date(alert.created_at))} ago
                </p>
              ))}
            </div>
          )}
        </div>

        <div className={cn(
          "p-4 rounded-lg border",
          activeRisks.length > 0 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50 border-gray-200"
        )}>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className={cn(
              "w-4 h-4",
              activeRisks.length > 0 ? "text-yellow-500" : "text-gray-500"
            )} />
            <p className={cn(
              "font-medium",
              activeRisks.length > 0 ? "text-yellow-500" : "text-gray-500"
            )}>Risk Indicators</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {activeRisks.length > 0 ? `${activeRisks.length} active risks` : 'All clear'}
          </p>
          {activeRisks.length > 0 && (
            <div className="mt-2 space-y-1">
              {activeRisks.slice(0, 2).map((risk) => (
                <p key={risk.id} className="text-xs text-yellow-600 truncate">
                  {risk.title} • {formatDistanceToNow(new Date(risk.created_at))} ago
                </p>
              ))}
            </div>
          )}
        </div>

        <div className={cn(
          "p-4 rounded-lg border",
          verifications.length > 0 ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
        )}>
          <div className="flex items-center gap-2 mb-2">
            <Shield className={cn(
              "w-4 h-4",
              verifications.length > 0 ? "text-green-500" : "text-gray-500"
            )} />
            <p className={cn(
              "font-medium",
              verifications.length > 0 ? "text-green-500" : "text-gray-500"
            )}>Verifications</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {verifications.length > 0 ? `${verifications.length} verified reports` : 'No recent verifications'}
          </p>
          {verifications.length > 0 && (
            <div className="mt-2 space-y-1">
              {verifications.slice(0, 2).map((verification) => (
                <p key={verification.id} className="text-xs text-green-600 truncate">
                  {verification.title} • {formatDistanceToNow(new Date(verification.created_at))} ago
                </p>
              ))}
            </div>
          )}
        </div>

        <div className={cn(
          "p-4 rounded-lg border",
          recoveryUpdates.length > 0 ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
        )}>
          <div className="flex items-center gap-2 mb-2">
            <Clock className={cn(
              "w-4 h-4",
              recoveryUpdates.length > 0 ? "text-blue-500" : "text-gray-500"
            )} />
            <p className={cn(
              "font-medium",
              recoveryUpdates.length > 0 ? "text-blue-500" : "text-gray-500"
            )}>Recovery Updates</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {recoveryUpdates.length > 0 ? `${recoveryUpdates.length} active cases` : 'No active cases'}
          </p>
          {recoveryUpdates.length > 0 && (
            <div className="mt-2 space-y-1">
              {recoveryUpdates.slice(0, 2).map((update) => (
                <p key={update.id} className="text-xs text-blue-600 truncate">
                  {update.title} • {formatDistanceToNow(new Date(update.created_at))} ago
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

function LoadingSkeleton() {
  return (
    <Card className="p-6" data-testid="loading-skeleton">
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="grid grid-cols-2 gap-4">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    </Card>
  )
}
