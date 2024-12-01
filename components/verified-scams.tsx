import { ReportCard } from './report-card'

export function VerifiedScams() {
  const scams = [
    {
      risk: 'high',
      project: 'SolPump',
      token: 'PUMP',
      lossAmount: 5000,
      timeReported: '1 week ago',
      votes: 532,
      verified: true
    },
    {
      risk: 'high',
      project: 'RugMaster',
      token: 'RUG',
      lossAmount: 3200,
      timeReported: '2 weeks ago',
      votes: 421,
      verified: true
    },
    {
      risk: 'medium',
      project: 'FakeMint',
      token: 'FMT',
      lossAmount: 1500,
      timeReported: '3 weeks ago',
      votes: 298,
      verified: true
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Verified Scams</h2>
      {scams.map((scam, index) => (
        <ReportCard key={index} {...scam} />
      ))}
    </div>
  )
}

