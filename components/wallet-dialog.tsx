'use client'

import { Copy, ExternalLink } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

interface WalletDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletDialog({ open, onOpenChange }: WalletDialogProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline">View Wallet</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-3">
            <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
              <span className="text-sm font-medium">7onp...YzqX</span>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <a
              href="#"
              className="mt-2 text-xs text-gray-600 hover:text-gray-900 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Solscan <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

