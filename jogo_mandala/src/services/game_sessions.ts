import pb from '@/lib/pocketbase/client'
import { GameSession } from '@/types/game'

export const saveGameSession = async (data: {
  score: number
  correct_count: number
  total_questions: number
  classification: string
}): Promise<GameSession | null> => {
  try {
    const userId = pb.authStore.record?.id || null
    const record = await pb.collection('game_sessions').create({
      ...data,
      user: userId,
    })
    return record as unknown as GameSession
  } catch (error) {
    console.error('Error saving game session:', error)
    return null
  }
}

export const getTopGameSessions = async (limit: number = 10): Promise<GameSession[]> => {
  try {
    const records = await pb.collection('game_sessions').getList(1, limit, {
      sort: '-score,-created',
      expand: 'user',
    })
    return records.items as unknown as GameSession[]
  } catch (error) {
    console.error('Error fetching top game sessions:', error)
    return []
  }
}
