import { jest } from '@jest/globals'
import { render, screen, act } from '@testing-library/react'
import WatchTowerPage from '@/app/watch-tower/page'

// Mock data
const mockData = {
  reports: [
    {
      id: '1',
      title: 'Test Report',
      description: 'Test description',
      status: 'pending' as const,
      risk_level: 'medium' as const,
      reported_by: 'user-1',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      victims_count: 0,
      evidence: {},
      metadata: {}
    }
  ],
  liveUpdates: [
    {
      id: '1',
      title: 'Test Update',
      content: 'Test content',
      update_type: 'scam_alert' as const,
      severity: 'warning' as const,
      is_active: true,
      created_at: new Date().toISOString(),
      metadata: {}
    }
  ],
  verifiedScams: [],
  riskIndicators: []
}

// Mock the hook first
jest.mock('@/hooks/useWatchTower', () => {
  const mockHook = {
    reports: mockData.reports,
    liveUpdates: mockData.liveUpdates,
    verifiedScams: mockData.verifiedScams,
    riskIndicators: mockData.riskIndicators,
    loading: false,
    error: null,
    actions: {
      submitReport: jest.fn().mockResolvedValue({}),
      verifyReport: jest.fn().mockResolvedValue({}),
      disputeReport: jest.fn().mockResolvedValue({})
    },
    refreshData: jest.fn().mockResolvedValue(undefined)
  }

  return {
    useWatchTower: () => mockHook
  }
})

// No need to mock Supabase since we're not using it in tests
jest.mock('@/lib/supabase', () => ({}))

// Mock UI components
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
    <button onClick={onClick} type="button">{children}</button>
  )
}))

jest.mock('@/components/ui/dialog', () => ({
  Dialog: ({ children, open }: any) => <div data-testid="dialog" data-open={open}>{children}</div>,
  DialogTrigger: ({ children }: any) => <div>{children}</div>,
  DialogContent: ({ children }: any) => <div data-testid="report-dialog">{children}</div>,
  DialogHeader: ({ children }: any) => <div>{children}</div>,
  DialogTitle: ({ children }: any) => <div>{children}</div>,
  DialogDescription: ({ children }: any) => <div>{children}</div>,
  DialogFooter: ({ children }: any) => <div>{children}</div>,
}))

// Mock watch tower components
jest.mock('@/components/watch-tower/live-updates', () => ({
  LiveUpdates: ({ updates = [], loading = false }: any) => (
    <div data-testid="live-updates" aria-busy={loading}>
      <h2>Live Updates</h2>
      <div>{loading ? 'Loading...' : `${updates.length} updates`}</div>
    </div>
  )
}))

jest.mock('@/components/watch-tower/latest-reports', () => ({
  LatestReports: ({ reports = [], loading = false }: any) => (
    <div data-testid="latest-reports" aria-busy={loading}>
      <h2>Latest Reports</h2>
      <div>{loading ? 'Loading...' : `${reports.length} reports`}</div>
    </div>
  )
}))

jest.mock('@/components/watch-tower/trending-warnings', () => ({
  TrendingWarnings: ({ indicators = [], loading = false }: any) => (
    <div data-testid="trending-warnings" aria-busy={loading}>
      <h2>Trending Warnings</h2>
      <div>{loading ? 'Loading...' : `${indicators.length} warnings`}</div>
    </div>
  )
}))

jest.mock('@/components/watch-tower/verified-scams', () => ({
  VerifiedScams: ({ scams = [], loading = false }: any) => (
    <div data-testid="verified-scams" aria-busy={loading}>
      <h2>Verified Scams</h2>
      <div>{loading ? 'Loading...' : `${scams.length} scams`}</div>
    </div>
  )
}))

describe('WatchTower Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('integrates all components correctly', async () => {
    await act(async () => {
      render(<WatchTowerPage />)
    })
    
    // Check if all components are rendered
    expect(screen.getByTestId('live-updates')).toBeInTheDocument()
    expect(screen.getByTestId('latest-reports')).toBeInTheDocument()
    expect(screen.getByTestId('trending-warnings')).toBeInTheDocument()
    expect(screen.getByTestId('verified-scams')).toBeInTheDocument()

    // Check data rendering
    expect(screen.getByText(/1 updates/)).toBeInTheDocument()
    expect(screen.getByText(/1 reports/)).toBeInTheDocument()
    expect(screen.getByText(/0 warnings/)).toBeInTheDocument()
    expect(screen.getByText(/0 scams/)).toBeInTheDocument()
  })

  it('handles report submission', async () => {
    await act(async () => {
      render(<WatchTowerPage />)
    })
    
    // Open dialog
    const reportButton = screen.getByText(/Report Scam/i)
    await act(async () => {
      reportButton.click()
    })

    // Check if dialog is open
    const dialog = screen.getByTestId('report-dialog')
    expect(dialog).toBeInTheDocument()

    // Submit report
    const submitButton = screen.getByText(/Submit/)
    await act(async () => {
      submitButton.click()
    })

    // Check if dialog is closed
    expect(dialog).not.toBeVisible()
  })
}) 