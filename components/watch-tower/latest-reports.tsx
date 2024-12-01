'use client'

import { ScamReport } from '@/types/watch-tower'
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, MoreHorizontal } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LatestReportsProps {
  reports: ScamReport[]
  loading: boolean
  onVerify: (reportId: string) => Promise<void>
  onDispute: (reportId: string, reason: string) => Promise<void>
}

export function LatestReports({ reports, loading, onVerify, onDispute }: LatestReportsProps) {
  if (loading) {
    return <LoadingSkeleton />
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Latest Reports</h2>
      <div className="space-y-4">
        {reports.length === 0 ? (
          <p className="text-sm text-muted-foreground">No reports yet</p>
        ) : (
          reports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onVerify={onVerify}
              onDispute={onDispute}
            />
          ))
        )}
      </div>
    </Card>
  )
}

interface ReportCardProps {
  report: ScamReport
  onVerify: (reportId: string) => Promise<void>
  onDispute: (reportId: string, reason: string) => Promise<void>
}

function ReportCard({ report, onVerify, onDispute }: ReportCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    verified: 'bg-green-100 text-green-800 border-green-200',
    disputed: 'bg-red-100 text-red-800 border-red-200',
    resolved: 'bg-blue-100 text-blue-800 border-blue-200'
  }

  const riskColors = {
    low: 'bg-blue-50 text-blue-700',
    medium: 'bg-yellow-50 text-yellow-700',
    high: 'bg-orange-50 text-orange-700',
    critical: 'bg-red-50 text-red-700'
  }

  return (
    <div className="p-4 border rounded-lg space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium">{report.title}</h3>
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium",
              statusColors[report.status]
            )}>
              {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
            </span>
            <span className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium",
              riskColors[report.risk_level]
            )}>
              {report.risk_level.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(report.created_at))} ago
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => onVerify(report.id)}
              disabled={report.status !== 'pending'}
            >
              <Shield className="w-4 h-4 mr-2" />
              Verify Report
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDispute(report.id, 'Insufficient evidence')}
              disabled={report.status !== 'pending'}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Dispute Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-sm">{report.description}</p>

      {report.contract_address && (
        <div className="text-sm">
          <span className="font-medium">Contract:</span>{' '}
          <code className="px-1 py-0.5 rounded bg-muted">{report.contract_address}</code>
        </div>
      )}

      {report.loss_amount && (
        <div className="text-sm">
          <span className="font-medium">Loss Amount:</span>{' '}
          <span className="text-red-600">{report.loss_amount} SOL</span>
        </div>
      )}

      {report.victims_count > 0 && (
        <div className="text-sm">
          <span className="font-medium">Victims:</span>{' '}
          <span>{report.victims_count}</span>
        </div>
      )}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <Card className="p-6">
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="space-y-4">
        {Array(3).fill(0).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
              </div>
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </Card>
  )
}
