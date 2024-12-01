import { supabase } from './supabase'

interface AIAnalysis {
  sentiment: 'positive' | 'negative' | 'neutral'
  topics: string[]
  suggestions: string[]
  riskLevel: number
}

export async function analyzeConversation(text: string): Promise<AIAnalysis> {
  try {
    const response = await fetch('/api/ai/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text })
    })
    return response.json()
  } catch (error) {
    console.error('Error analyzing conversation:', error)
    return {
      sentiment: 'neutral',
      topics: [],
      suggestions: [],
      riskLevel: 0
    }
  }
}

export async function getAIEnhancedMatch(userId: string, preferences: any) {
  const { data: users, error } = await supabase
    .from('user_profiles')
    .select('*')
    .neq('id', userId)
    .eq('status', 'online')
    .eq('looking_for_match', true)

  if (error) throw error

  // AI matching logic would go here
  return users[0] // For now, return first available user
} 