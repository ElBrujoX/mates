import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Get active alerts count
    const { count: activeAlerts, error: alertsError } = await supabase
      .from('live_updates')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)
      .eq('update_type', 'scam_alert')

    if (alertsError) throw alertsError

    // Get risk levels distribution
    const { data: riskLevels, error: riskError } = await supabase
      .from('risk_indicators')
      .select('severity')
      .eq('is_active', true)

    if (riskError) throw riskError

    // Get verification status
    const { count: verifiedCount, error: verifiedError } = await supabase
      .from('verified_scams')
      .select('*', { count: 'exact', head: true })

    if (verifiedError) throw verifiedError

    return NextResponse.json({
      activeAlerts,
      riskLevels: riskLevels.reduce((acc, curr) => {
        acc[curr.severity] = (acc[curr.severity] || 0) + 1
        return acc
      }, {}),
      verifiedScams: verifiedCount
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
} 