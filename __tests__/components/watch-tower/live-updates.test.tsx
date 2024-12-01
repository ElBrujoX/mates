import { render, screen } from '@testing-library/react'
import { LiveUpdates } from '@/components/watch-tower/live-updates'
import { LiveUpdate } from '@/types/watch-tower'

describe('LiveUpdates', () => {
  it('renders loading state', () => {
    render(<LiveUpdates updates={[]} loading={true} />)
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument()
  })

  it('renders empty state', () => {
    render(<LiveUpdates updates={[]} loading={false} />)
    expect(screen.getByText('No active alerts')).toBeInTheDocument()
  })

  it('renders updates correctly', () => {
    const updates: LiveUpdate[] = [{
      id: '1',
      update_type: 'scam_alert',
      severity: 'critical',
      title: 'Test Alert',
      content: 'Test content',
      is_active: true,
      created_at: new Date().toISOString(),
      metadata: {}
    }]

    render(<LiveUpdates updates={updates} loading={false} />)
    expect(screen.getByText(/Test Alert/)).toBeInTheDocument()
  })
}) 