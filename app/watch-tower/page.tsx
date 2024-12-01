'use client'

import { LiveUpdates } from "@/components/watch-tower/live-updates"
import { LatestReports } from "@/components/watch-tower/latest-reports"
import { TrendingWarnings } from "@/components/watch-tower/trending-warnings"
import { VerifiedScams } from "@/components/watch-tower/verified-scams"
import { useWatchTower } from "@/hooks/useWatchTower"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { ReportScamDialog } from "@/components/watch-tower/report-scam-dialog"
import { useState } from "react"

export default function WatchTowerPage() {
  const [showReportDialog, setShowReportDialog] = useState(false)
  const {
    reports,
    liveUpdates,
    verifiedScams,
    riskIndicators,
    loading,
    error,
    actions
  } = useWatchTower()

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading Watch Tower: {error}
      </div>
    )
  }

  return (
    <main className="container px-4 py-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Watch Tower</h1>
        <Button onClick={() => setShowReportDialog(true)}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Report Scam
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LiveUpdates 
          updates={liveUpdates}
          loading={loading}
        />
        <LatestReports 
          reports={reports}
          loading={loading}
          onVerify={actions.verifyReport}
          onDispute={actions.disputeReport}
        />
        <TrendingWarnings 
          indicators={riskIndicators}
          loading={loading}
        />
        <VerifiedScams 
          scams={verifiedScams}
          loading={loading}
        />
      </div>

      <ReportScamDialog 
        open={showReportDialog}
        onOpenChange={setShowReportDialog}
        onSubmit={actions.submitReport}
      />
    </main>
  )
}

