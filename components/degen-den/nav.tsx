'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart2, MessageSquare, Swords, Brain, Users, Radio } from 'lucide-react'

const navigation = [
  {
    name: "Watch Tower",
    href: "/degen-den/watch-tower",
    icon: BarChart2,
  },
  {
    name: "Trenches",
    href: "/degen-den/trenches",
    icon: MessageSquare,
  },
  {
    name: "Battle Station",
    href: "/degen-den/battle-station",
    icon: Swords,
  },
  {
    name: "Intel Hub",
    href: "/degen-den/intel-hub",
    icon: Brain,
  },
  {
    name: "Social Hub",
    href: "/degen-den/social-hub",
    icon: Users,
  },
  {
    name: "Signal Station",
    href: "/degen-den/signal-station",
    icon: Radio,
  },
]

export function DegenDenNav() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container flex h-14 items-center px-4">
        <div className="flex space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-gray-900",
                  pathname === item.href
                    ? "text-purple-600"
                    : "text-gray-600"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
} 