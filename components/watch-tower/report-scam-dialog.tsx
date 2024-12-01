'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { ScamReport } from "@/types/watch-tower"

interface ReportScamDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (report: Partial<ScamReport>) => Promise<void>
}

export function ReportScamDialog({ open, onOpenChange, onSubmit }: ReportScamDialogProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contract_address: '',
    risk_level: 'medium' as ScamReport['risk_level'],
    loss_amount: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit({
        ...formData,
        loss_amount: formData.loss_amount ? parseFloat(formData.loss_amount) : undefined
      })
      onOpenChange(false)
      setFormData({
        title: '',
        description: '',
        contract_address: '',
        risk_level: 'medium',
        loss_amount: ''
      })
    } catch (error) {
      console.error('Failed to submit report:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report a Scam</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
              required
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Brief description of the scam"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Detailed description of what happened"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Contract Address (optional)</label>
            <Input
              value={formData.contract_address}
              onChange={e => setFormData(prev => ({ ...prev, contract_address: e.target.value }))}
              placeholder="0x..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Risk Level</label>
            <Select
              value={formData.risk_level}
              onValueChange={value => setFormData(prev => ({ ...prev, risk_level: value as ScamReport['risk_level'] }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Loss Amount (SOL)</label>
            <Input
              type="number"
              step="0.01"
              value={formData.loss_amount}
              onChange={e => setFormData(prev => ({ ...prev, loss_amount: e.target.value }))}
              placeholder="0.00"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Report'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 