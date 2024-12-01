import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()
const DEFAULT_TTL = 60 * 5 // 5 minutes

export const cache = {
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await redis.get(key)
      return value ? JSON.parse(value) : null
    } catch {
      return null
    }
  },

  async set(key: string, value: any, ttl = DEFAULT_TTL) {
    try {
      await redis.set(key, JSON.stringify(value), { ex: ttl })
      return true
    } catch {
      return false
    }
  },

  async invalidate(key: string) {
    try {
      await redis.del(key)
      return true
    } catch {
      return false
    }
  }
} 