import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()
const WINDOW_SIZE = 60 * 1000 // 1 minute
const MAX_REQUESTS = 100 // requests per window

export async function rateLimit(request: NextRequest) {
  try {
    const ip = request.ip ?? '127.0.0.1'
    const key = `rate-limit:${ip}`
    
    const currentTime = Date.now()
    const windowStart = currentTime - WINDOW_SIZE
    
    // Clean old requests
    await redis.zremrangebyscore(key, 0, windowStart)
    
    // Count requests in current window
    const requestCount = await redis.zcount(key, windowStart, currentTime)
    
    if (requestCount >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }
    
    // Add current request
    await redis.zadd(key, currentTime, currentTime.toString())
    await redis.expire(key, 60) // expire after 1 minute
    
    return NextResponse.next()
  } catch (error) {
    console.error('Rate limit error:', error)
    return NextResponse.next() // Fail open
  }
} 