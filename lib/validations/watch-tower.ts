import { z } from 'zod'

export const scamReportStatusEnum = z.enum(['pending', 'verified', 'disputed', 'resolved'])
export const riskLevelEnum = z.enum(['low', 'medium', 'high', 'critical'])
export const updateTypeEnum = z.enum(['scam_alert', 'risk_indicator', 'verification', 'recovery'])
export const updateSeverityEnum = z.enum(['info', 'warning', 'critical'])
export const scamTypeEnum = z.enum(['Token Scam', 'Liquidity Scam', 'Phishing', 'Honeypot', 'Other'])

export const scamReportSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  contract_address: z.string().optional(),
  risk_level: riskLevelEnum,
  status: scamReportStatusEnum,
  reported_by: z.string().uuid(),
  loss_amount: z.number().nonnegative().optional(),
  victims_count: z.number().int().nonnegative(),
  evidence: z.any(),
  metadata: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime()
})

export const liveUpdateSchema = z.object({
  id: z.string().uuid(),
  update_type: updateTypeEnum,
  severity: updateSeverityEnum,
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  metadata: z.record(z.any()).optional(),
  is_active: z.boolean(),
  created_at: z.string().datetime(),
  expires_at: z.string().datetime().optional()
})

export const verifiedScamSchema = z.object({
  id: z.string().uuid(),
  scam_type: scamTypeEnum,
  contract_address: z.string().optional(),
  description: z.string().min(1),
  total_loss: z.number().nonnegative(),
  victims_count: z.number().int().nonnegative(),
  evidence_links: z.array(z.string().url()),
  related_cases: z.array(z.string().uuid()).optional(),
  reported_by: z.string().uuid(),
  verified_by: z.string().uuid(),
  metadata: z.record(z.any()).optional(),
  created_at: z.string().datetime(),
  verified_at: z.string().datetime()
})

export const riskIndicatorSchema = z.object({
  id: z.string().uuid(),
  indicator_type: z.string().min(1),
  severity: riskLevelEnum,
  description: z.string().min(1),
  metadata: z.object({
    affected_users: z.number().int().nonnegative().optional(),
    related_links: z.array(z.string().url()).optional()
  }).catchall(z.any()).optional(),
  is_active: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime()
})

// Input validation schemas
export const submitReportSchema = scamReportSchema.pick({
  title: true,
  description: true,
  contract_address: true,
  risk_level: true,
  loss_amount: true
})

export const verifyReportSchema = z.object({
  reportId: z.string().uuid(),
  evidence: z.array(z.string().url())
})

export const disputeReportSchema = z.object({
  reportId: z.string().uuid(),
  reason: z.string().min(1)
})

// Type inference
export type ScamReport = z.infer<typeof scamReportSchema>
export type LiveUpdate = z.infer<typeof liveUpdateSchema>
export type VerifiedScam = z.infer<typeof verifiedScamSchema>
export type RiskIndicator = z.infer<typeof riskIndicatorSchema>
export type SubmitReportInput = z.infer<typeof submitReportSchema>
export type VerifyReportInput = z.infer<typeof verifyReportSchema>
export type DisputeReportInput = z.infer<typeof disputeReportSchema> 