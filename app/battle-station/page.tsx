'use client'

import { useState } from "react"
import { TournamentEntryModal } from "@/components/tournament-entry-modal"
import { TeamFormationModal } from "@/components/team-formation-modal"
import { PositionCalculator } from "@/components/battle-tools/position-calculator"
import { ActiveTournaments } from "@/components/battle-station/active-tournaments"
import { TeamBattles } from "@/components/battle-station/team-battles"
import { Leaderboards } from "@/components/battle-station/leaderboards"
import { PrizePools } from "@/components/battle-station/prize-pools"
import { BattleHistory } from "@/components/battle-station/battle-history"

export default function BattleStation() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Battle Station</h1>
        <div className="flex gap-4">
          <TournamentEntryModal />
          <TeamFormationModal />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PositionCalculator />
        <ActiveTournaments />
        <TeamBattles />
        <Leaderboards />
        <PrizePools />
        <BattleHistory />
      </div>
    </div>
  )
}

