'use client'

import { useState } from 'react'
import { Trash2, Wallet } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function SettingsPage() {
  const [displayName, setDisplayName] = useState('')

  return (
    <div className="min-h-screen bg-[#faf8ff]">
      <SiteHeader />
      
      <main className="container max-w-2xl mx-auto px-4 py-8">
        {/* Profile & Preferences */}
        <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-6">Profile & Preferences</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Display Name</label>
              <Input
                placeholder="Your display name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="bg-gray-950 text-white"
              />
            </div>
          </div>
        </div>

        {/* Connections */}
        <div className="bg-white rounded-lg border border-gray-100 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-6">Connections</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Phantom Wallet</div>
                  <div className="text-xs text-gray-500">Last used: 2 hours ago</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4 text-gray-400" />
              </Button>
            </div>

            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Solflare Wallet</div>
                  <div className="text-xs text-gray-500">Last used: 1 day ago</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Trash2 className="w-4 h-4 text-gray-400" />
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              Connect New Wallet
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

