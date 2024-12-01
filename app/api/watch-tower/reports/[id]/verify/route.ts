import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createErrorResponse } from '@/lib/error-handling'

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const { evidence } = await req.json()

    // Update report status
    const { data: report, error: reportError } = await supabase
      .from('scam_reports')
      .update({ status: 'verified' })
      .eq('id', id)
      .select()
      .single()

    if (reportError) throw reportError

    // Create verified scam entry
    const { error: scamError } = await supabase
      .from('verified_scams')
      .insert([{
        scam_type: report.title,
        contract_address: report.contract_address,
        description: report.description,
        total_loss: report.loss_amount,
        victims_count: 1,
        evidence_links: evidence,
        reported_by: report.reported_by,
        verified_by: 'verifier_id' // TODO: Get from auth
      }])

    if (scamError) throw scamError

    // Add live update
    await supabase
      .from('live_updates')
      .insert([{
        update_type: 'verification',
        severity: 'warning',
        title: `Scam Verified: ${report.title}`,
        content: report.description,
        metadata: { report_id: id }
      }])

    return NextResponse.json(report)
  } catch (error) {
    return createErrorResponse(error)
  }
} 