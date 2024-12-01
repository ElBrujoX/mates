'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LiveChat() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    // Implement send message logic here
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <div className="flex flex-col h-full">
      <CardHeader className="py-3 px-4 border-b">
        <CardTitle className="text-lg font-semibold">Live Chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto p-4">
        {/* Chat messages would go here */}
      </CardContent>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

