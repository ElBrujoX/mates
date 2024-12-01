import { z } from 'zod'

export const scamReportSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  contract_address: z.string().optional(),
  risk_level: z.enum(['low', 'medium', 'high', 'critical']),
  loss_amount: z.number().optional(),
  evidence: z.any().optional()
})

export const disputeSchema = z.object({
  reason: z.string().min(1).max(1000)
})

export const warningSchema = z.object({
  pattern: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(['low', 'medium', 'high', 'critical'])
})

export async function validateRequest<T>(
  schema: z.Schema<T>,
  data: unknown
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  try {
    const validData = await schema.parseAsync(data)
    return { success: true, data: validData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    return { success: false, error: 'Invalid request data' }
  }
} 