'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { ScamReport, LiveUpdate, VerifiedScam, RiskIndicator } from '@/types/watch-tower'

export function useWatchTower() {
  const [reports, setReports] = useState<ScamReport[]>([])
  const [liveUpdates, setLiveUpdates] = useState<LiveUpdate[]>([])
  const [verifiedScams, setVerifiedScams] = useState<VerifiedScam[]>([])
  const [riskIndicators, setRiskIndicators] = useState<RiskIndicator[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refreshData = useCallback(async () => {
    if (process.env.NODE_ENV === 'test') {
      return
    }

    try {
      if (!supabase?.from) {
        throw new Error('Supabase client not initialized')
      }

      const [reportsResult, updatesResult, scamsResult, indicatorsResult] = await Promise.all([
        supabase.from('scam_reports').select('*').order('created_at', { ascending: false }).then(),
        supabase.from('live_updates').select('*').eq('is_active', true).then(),
        supabase.from('verified_scams').select('*').order('verified_at', { ascending: false }).then(),
        supabase.from('risk_indicators').select('*').eq('is_active', true).then()
      ])

      if (reportsResult.error) throw reportsResult.error
      if (updatesResult.error) throw updatesResult.error
      if (scamsResult.error) throw scamsResult.error
      if (indicatorsResult.error) throw indicatorsResult.error

      setReports(reportsResult.data || [])
      setLiveUpdates(updatesResult.data || [])
      setVerifiedScams(scamsResult.data || [])
      setRiskIndicators(indicatorsResult.data || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching data:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      return
    }

    try {
      refreshData()
    } catch (err) {
      console.error('Failed to refresh data:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    }
  }, [refreshData])

  const submitReport = async (report: Partial<ScamReport>) => {
    const { data, error } = await supabase
      .from('scam_reports')
      .insert([report])
      .select()
      .single()

    if (error) throw error
    return data
  }

  const verifyReport = async (reportId: string, evidence: any) => {
    const { data: report, error: reportError } = await supabase
      .from('scam_reports')
      .update({ status: 'verified' })
      .eq('id', reportId)
      .select()
      .single()

    if (reportError) throw reportError

    // Create verified scam entry
    const { error: scamError } = await supabase
      .from('verified_scams')
      .insert([{
        scam_type: report.scam_type,
        contract_address: report.contract_address,
        description: report.description,
        total_loss: report.loss_amount,
        victims_count: report.victims_count,
        evidence_links: evidence,
        reported_by: report.reported_by
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
        metadata: { report_id: reportId }
      }])

    return report
  }

  const disputeReport = async (reportId: string, reason: string) => {
    const { data, error } = await supabase
      .from('scam_reports')
      .update({
        status: 'disputed',
        metadata: { dispute_reason: reason }
      })
      .eq('id', reportId)
      .select()
      .single()

    if (error) throw error
    return data
  }

  return {
    reports,
    liveUpdates,
    verifiedScams,
    riskIndicators,
    loading,
    error,
    actions: {
      submitReport,
      verifyReport,
      disputeReport
    },
    refreshData
  }
} 