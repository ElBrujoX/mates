import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { text } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant analyzing trading conversations. Analyze the following text and provide sentiment, topics discussed, and trading-related suggestions."
        },
        {
          role: "user",
          content: text
        }
      ],
      response_format: { type: "json_object" }
    })

    const analysis = JSON.parse(completion.choices[0].message.content!)

    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Error in AI analysis:', error)
    return NextResponse.json({ error: 'Failed to analyze text' }, { status: 500 })
  }
} 