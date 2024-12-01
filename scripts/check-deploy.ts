import { join } from 'path'
import { readFileSync } from 'fs'

// Load environment variables from .env.local
const loadEnvFile = () => {
  try {
    const envPath = join(process.cwd(), '.env.local')
    console.log('Loading env from:', envPath)
    
    const envContent = readFileSync(envPath, 'utf-8')
    
    // Parse and set environment variables
    const env: Record<string, string> = {}
    envContent.split('\n').forEach(line => {
      if (line.trim() && !line.startsWith('#')) {
        const [key, ...values] = line.split('=')
        if (key && values.length > 0) {
          const value = values.join('=').trim()
          env[key.trim()] = value
          process.env[key.trim()] = value
        }
      }
    })

    return env
  } catch (error) {
    console.error('Failed to load .env.local:', error)
    process.exit(1)
  }
}

// Load environment variables first
const env = loadEnvFile()
console.log('Environment loaded:', {
  SUPABASE_URL: env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 10) + '...',
  REDIS_URL: env.UPSTASH_REDIS_REST_URL?.substring(0, 10) + '...',
  NODE_ENV: process.env.NODE_ENV
})

// Only import dependencies after environment is loaded
const runChecks = async () => {
  const { validateEnv } = await import('../lib/env')
  const { supabase } = await import('../lib/supabase')
  const { cache } = await import('../lib/cache')

  console.log('🔍 Running deployment checks...')

  try {
    // Check env vars
    validateEnv()
    console.log('✅ Environment variables validated')

    // Check Supabase connection
    const { error: supabaseError } = await supabase
      .from('scam_reports')
      .select('count')

    if (supabaseError) throw supabaseError
    console.log('✅ Supabase connection verified')

    // Check Redis connection
    await cache.set('test', 'test')
    await cache.invalidate('test')
    console.log('✅ Redis connection verified')

    console.log('✅ All checks passed!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Deployment check failed:', error)
    process.exit(1)
  }
}

runChecks() 