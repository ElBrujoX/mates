export type ScamReportStatus = 'pending' | 'verified' | 'disputed' | 'resolved'
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical'
export type UpdateType = 'scam_alert' | 'risk_indicator' | 'verification' | 'recovery'
export type UpdateSeverity = 'info' | 'warning' | 'critical'
export type ScamType = 'Token Scam' | 'Liquidity Scam' | 'Phishing' | 'Honeypot' | 'Other'

export interface ScamReport {
  id: string
  title: string
  description: string
  contract_address?: string
  risk_level: RiskLevel
  status: ScamReportStatus
  reported_by: string
  loss_amount?: number
  victims_count: number
  evidence: any
  metadata?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface LiveUpdate {
  id: string
  update_type: UpdateType
  severity: UpdateSeverity
  title: string
  content: string
  metadata?: Record<string, any>
  is_active: boolean
  created_at: string
  expires_at?: string
}

export interface VerifiedScam {
  id: string
  scam_type: ScamType
  contract_address?: string
  description: string
  total_loss: number
  victims_count: number
  evidence_links: string[]
  related_cases?: string[]
  reported_by: string
  verified_by: string
  metadata?: Record<string, any>
  created_at: string
  verified_at: string
}

export interface RiskIndicator {
  id: string
  indicator_type: string
  severity: RiskLevel
  description: string
  metadata?: {
    affected_users?: number
    related_links?: string[]
    [key: string]: any
  }
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface WatchTowerState {
  reports: ScamReport[]
  liveUpdates: LiveUpdate[]
  verifiedScams: VerifiedScam[]
  riskIndicators: RiskIndicator[]
  loading: boolean
  error: string | null
}

export interface WatchTowerActions {
  submitReport: (report: Partial<ScamReport>) => Promise<ScamReport>
  verifyReport: (reportId: string, evidence: string[]) => Promise<ScamReport>
  disputeReport: (reportId: string, reason: string) => Promise<ScamReport>
}

export interface WatchTowerHook extends WatchTowerState {
  actions: WatchTowerActions
  refreshData: () => Promise<void>
} 