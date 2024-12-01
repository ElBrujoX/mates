import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const { reason } = await req.json()

    const { data: report, error } = await supabase
      .from('scam_reports')
      .update({ 
        status: 'disputed',
        metadata: { dispute_reason: reason }
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    // Add live update
    await supabase
      .from('live_updates')
      .insert([{
        update_type: 'verification',
        severity: 'warning',
        title: `Report Disputed: ${report.title}`,
        content: reason,
        metadata: { report_id: id }
      }])

    return NextResponse.json(report)
  } catch (error) {
    console.error('Error disputing report:', error)
    return NextResponse.json({ error: 'Failed to dispute report' }, { status: 500 })
  }
} 