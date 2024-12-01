import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { PostgrestError } from '@supabase/supabase-js'

export function createErrorResponse(error: unknown) {
  console.error('Error:', error)

  if (error instanceof ZodError) {
    return NextResponse.json(
      { error: 'Validation error', details: error.errors },
      { status: 400 }
    )
  }

  if ((error as PostgrestError).code) {
    const pgError = error as PostgrestError
    return NextResponse.json(
      { error: 'Database error', code: pgError.code, message: pgError.message },
      { status: 500 }
    )
  }

  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
} 