export interface ScamReport {
  id: string;
  title: string;
  description: string;
  contract_address?: string;
  risk_level: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'verified' | 'disputed' | 'resolved';
  loss_amount?: number;
  victims_count?: number;
  created_at: Date;
  updated_at: Date;
}

export interface RiskIndicator {
  id: string;
  indicator_type: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  is_active: boolean;
  created_at: Date;
  metadata?: {
    affected_users?: number;
    related_links?: string[];
  };
}

export interface VerifiedScam {
  id: string;
  description: string;
  scam_type: string;
  contract_address?: string;
  total_loss: number;
  victims_count: number;
  verified_at: Date;
  evidence_links?: string[];
  related_cases?: string[];
}

export interface LiveUpdate {
  id: string;
  update_type: 'scam_alert' | 'risk_indicator' | 'verification' | 'recovery';
  title: string;
  description?: string;
  is_active: boolean;
  created_at: Date;
} 