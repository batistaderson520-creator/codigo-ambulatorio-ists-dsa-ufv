import pb from '@/lib/pocketbase/client'
import { Question, ISTType } from '@/types/game'

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const records = await pb.collection('questions').getFullList({
      sort: '-created',
    })
    return records as unknown as Question[]
  } catch (error) {
    console.error('Error fetching questions:', error)
    return []
  }
}

export const getQuestionsByIST = async (ist: ISTType): Promise<Question[]> => {
  try {
    const records = await pb.collection('questions').getFullList({
      filter: `ist = "${ist}"`,
    })
    return records as unknown as Question[]
  } catch (error) {
    console.error(`Error fetching questions for ${ist}:`, error)
    return []
  }
}
