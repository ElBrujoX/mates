'use client'

import { useState, useEffect } from 'react'
import { VideoChat } from '@/components/video-chat/video-chat'
import { useSearchParams } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Zap, UserIcon, Settings, Globe, Trophy, MessageSquare, Smile, PlusCircle, MoreVertical, ChevronRight, PieChart, Star, UserPlus } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function VideoChatPage() {
  const searchParams = useSearchParams()
  const [roomId] = useState(() => searchParams.get('room') || uuidv4())
  const [userId] = useState(() => uuidv4())
  const [isAIEnhanced, setIsAIEnhanced] = useState(false)
  const [message, setMessage] = useState('')
  const [sessionTime, setSessionTime] = useState(0)

  // Session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prevTime => prevTime + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <SiteHeader />
      
      <main className="container px-4 py-6 max-w-7xl mx-auto h-[calc(100vh-4rem)]">
        <div className="flex flex-col h-full gap-6">
          {/* Header with controls */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                  Online
                </Badge>
                <span className="text-sm text-gray-500">Session: {formatTime(sessionTime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Trophy className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 p-0" align="end">
                    <div className="bg-zinc-950 rounded-lg text-zinc-200 p-2">
                      <div className="px-3 py-2">
                        <h3 className="font-semibold text-lg text-white">Engagement</h3>
                      </div>
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-between px-3 py-2 text-left hover:bg-zinc-900 rounded-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded bg-yellow-500/20">
                              <Trophy className="h-4 w-4 text-yellow-500" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Trading Challenge</div>
                              <div className="text-xs text-zinc-400">Start a friendly competition</div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-600" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          className="w-full justify-between px-3 py-2 text-left hover:bg-zinc-900 rounded-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded bg-purple-500/20">
                              <PieChart className="h-4 w-4 text-purple-500" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Create Poll</div>
                              <div className="text-xs text-zinc-400">Get market sentiment</div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-600" />
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-between px-3 py-2 text-left hover:bg-zinc-900 rounded-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded bg-blue-500/20">
                              <UserPlus className="h-4 w-4 text-blue-500" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Add to Network</div>
                              <div className="text-xs text-zinc-400">Save contact for later</div>
                            </div>
                          </div>
                          <PlusCircle className="h-4 w-4 text-zinc-600" />
                        </Button>

                        <Button
                          variant="ghost"
                          className="w-full justify-between px-3 py-2 text-left hover:bg-zinc-900 rounded-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded bg-pink-500/20">
                              <Star className="h-4 w-4 text-pink-500" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">Rate Trader</div>
                              <div className="text-xs text-zinc-400">Share your experience</div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-600" />
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Preferences</h4>
                        <p className="text-sm text-muted-foreground">
                          Customize your chat experience
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger id="language" className="col-span-2 h-8">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="experience">Experience</Label>
                          <Select defaultValue="intermediate">
                            <SelectTrigger id="experience" className="col-span-2 h-8">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="pairs">Trading Pairs</Label>
                          <Select defaultValue="btc-usd">
                            <SelectTrigger id="pairs" className="col-span-2 h-8">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="btc-usd">BTC/USD</SelectItem>
                              <SelectItem value="eth-usd">ETH/USD</SelectItem>
                              <SelectItem value="sol-usd">SOL/USD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-100 rounded-full p-1">
              <div className="flex items-center space-x-2 px-4">
                <Zap className={`w-4 h-4 ${isAIEnhanced ? 'text-gray-400' : 'text-purple-500'}`} />
                <span className={`text-sm font-medium ${isAIEnhanced ? 'text-gray-400' : 'text-purple-500'}`}>Random</span>
              </div>
              <Switch
                checked={isAIEnhanced}
                onCheckedChange={setIsAIEnhanced}
                className="data-[state=checked]:bg-purple-500"
              />
              <div className="flex items-center space-x-2 px-4">
                <UserIcon className={`w-4 h-4 ${isAIEnhanced ? 'text-purple-500' : 'text-gray-400'}`} />
                <span className={`text-sm font-medium ${isAIEnhanced ? 'text-purple-500' : 'text-gray-400'}`}>AI-Enhanced</span>
              </div>
            </div>
          </div>

          {/* Video Chat Component */}
          <div className="flex-1">
            <VideoChat 
              roomId={roomId} 
              userId={userId} 
              isAIEnhanced={isAIEnhanced} 
            />
          </div>
        </div>
      </main>
    </div>
  )
}

