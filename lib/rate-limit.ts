import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server'

const redis = Redis.fromEnv()

export async function rateLimit(ip: string) {
  const limit = 100 // requests
  const duration = 60 // seconds

  const key = `rate-limit:${ip}`
  let count: number

  try {
    count = await redis.incr(key)

    if (count === 1) {
      await redis.expire(key, duration)
    }

    if (count > limit) {
      return false
    }

    return true
  } catch (error) {
    console.error('Rate limit error:', error)
    return true // Fail open
  }
} 