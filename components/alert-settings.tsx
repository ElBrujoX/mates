'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface AlertSettingsProps {
  onClose: () => void
}

export function AlertSettings({ onClose }: AlertSettingsProps) {
  const [pushNotifications, setPushNotifications] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [discordIntegration, setDiscordIntegration] = useState(false)
  const [telegramBroadcasts, setTelegramBroadcasts] = useState(false)

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alert Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch
              id="push-notifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="email-alerts">Email Alerts</Label>
            <Switch
              id="email-alerts"
              checked={emailAlerts}
              onCheckedChange={setEmailAlerts}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="discord-integration">Discord Integration</Label>
            <Switch
              id="discord-integration"
              checked={discordIntegration}
              onCheckedChange={setDiscordIntegration}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="telegram-broadcasts">Telegram Broadcasts</Label>
            <Switch
              id="telegram-broadcasts"
              checked={telegramBroadcasts}
              onCheckedChange={setTelegramBroadcasts}
            />
          </div>
        </div>
        <Button onClick={onClose}>Save Settings</Button>
      </DialogContent>
    </Dialog>
  )
}

