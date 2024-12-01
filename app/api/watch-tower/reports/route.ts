import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { submitReportSchema, verifyReportSchema, disputeReportSchema } from '@/lib/validations/watch-tower'

export async function GET() {
  try {
    const { data: reports, error } = await supabase
      .from('scam_reports')
      .select(`
        *,
        reported_by:auth.users(id, email)
      `)
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) throw error

    return NextResponse.json(reports)
  } catch (error) {
    return createErrorResponse(error)
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedData = submitReportSchema.parse(body)

    const { data, error } = await supabase
      .from('scam_reports')
      .insert([validatedData])
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { reportId, ...data } = body

    // Validate based on action type
    if ('evidence' in data) {
      verifyReportSchema.parse({ reportId, evidence: data.evidence })
    } else if ('reason' in data) {
      disputeReportSchema.parse({ reportId, reason: data.reason })
    } else {
      throw new Error('Invalid action')
    }

    const { data: report, error } = await supabase
      .from('scam_reports')
      .update(data)
      .eq('id', reportId)
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(report)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}