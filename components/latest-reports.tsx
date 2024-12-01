import { ReportCard } from './report-card'

export function LatestReports() {
  const reports = [
    {
      risk: 'high',
      project: 'FakeSolToken',
      token: 'FST',
      lossAmount: 1000,
      timeReported: '2 hours ago',
      votes: 45,
      verified: false
    },
    {
      risk: 'medium',
      project: 'QuickGains',
      token: 'QG',
      lossAmount: 500,
      timeReported: '5 hours ago',
      votes: 23,
      verified: true
    },
    {
      risk: 'low',
      project: 'SolStarter',
      token: 'SLS',
      lossAmount: 100,
      timeReported: '1 day ago',
      votes: 12,
      verified: true
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Reports</h2>
      {reports.map((report, index) => (
        <ReportCard key={index} {...report} />
      ))}
    </div>
  )
}

