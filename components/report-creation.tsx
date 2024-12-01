'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ReportCreationProps {
  onClose: () => void
}

export function ReportCreation({ onClose }: ReportCreationProps) {
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle>Report a Scam</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="Enter project name" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="token-symbol">Token Symbol</Label>
                <Input id="token-symbol" placeholder="Enter token symbol" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="incident-description">Incident Description</Label>
                <Textarea id="incident-description" placeholder="Describe what happened" className="bg-gray-800 text-white" />
              </div>
              <Button type="button" onClick={() => setStep(2)}>Next</Button>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <Label htmlFor="wallet-address">Affected Wallet Address</Label>
                <Input id="wallet-address" placeholder="Enter your wallet address" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="loss-amount">Loss Amount (in SOL)</Label>
                <Input id="loss-amount" type="number" placeholder="Enter the amount lost" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="evidence">Evidence (Transaction hash, screenshots)</Label>
                <Input id="evidence" type="file" multiple className="bg-gray-800 text-white" />
              </div>
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button type="submit">Submit Report</Button>
              </div>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

