'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [showWallet, setShowWallet] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold">
          solmates.club
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/video-chat" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Video Chat
          </Link>
          <Link href="/degen-den" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Degen Den
          </Link>
          <Link href="/settings" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Settings
          </Link>
        </nav>
        <Button variant="outline" onClick={() => setShowWallet(!showWallet)}>
          View Wallet
        </Button>
      </div>
    </header>
  )
}

