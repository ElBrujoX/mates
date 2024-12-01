import { ReportCard } from './report-card'

export function TrendingWarnings() {
  const warnings = [
    {
      risk: 'high',
      project: 'MoonRocket',
      token: 'MRT',
      lossAmount: 2500,
      timeReported: '1 day ago',
      votes: 156,
      verified: false
    },
    {
      risk: 'medium',
      project: 'SolGains',
      token: 'SLG',
      lossAmount: 750,
      timeReported: '2 days ago',
      votes: 89,
      verified: true
    },
    {
      risk: 'high',
      project: 'LunarLambo',
      token: 'LLAM',
      lossAmount: 1800,
      timeReported: '3 days ago',
      votes: 201,
      verified: true
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trending Warnings</h2>
      {warnings.map((warning, index) => (
        <ReportCard key={index} {...warning} />
      ))}
    </div>
  )
}

