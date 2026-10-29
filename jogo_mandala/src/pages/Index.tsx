import React, { useState, useEffect, useRef, useCallback } from 'react'
import { DEFAULT_QUESTIONS, WHEEL_SEGMENTS } from '@/data/gameData'
import { Question, GameSession, getClassification } from '@/types/game'
import { GameHeader } from '@/components/GameHeader'
import { Wheel } from '@/components/Wheel'
import { QuestionCard } from '@/components/QuestionCard'
import { FinalResultScreen } from '@/components/FinalResultScreen'
import { NavigationDrawer } from '@/components/NavigationDrawer'
import { ParticleBackground } from '@/components/ParticleBackground'
import { useAudio } from '@/hooks/use-audio'
import { triggerConfetti } from '@/lib/confetti'
import { saveGameSession } from '@/services/game_sessions'

// Shuffle array utility helper (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function Index() {
  // Game Questions pool (10 randomized questions with shuffled options)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  // Game UI flow state: 'wheel' | 'question' | 'feedback' | 'finished'
  const [phase, setPhase] = useState<'wheel' | 'question' | 'feedback' | 'finished'>('wheel')
  const [isSpinning, setIsSpinning] = useState(false)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number | null>(null)

  // Question Interaction state
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)

  // Navigation drawer state
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { playSpinTick, playCorrectSound, playWrongSound, playFanfare } = useAudio()
  const spinIntervalRef = useRef<number | null>(null)
  const spinTimeoutRef = useRef<number | null>(null)

  // Initialize and shuffle 10 questions and their alternatives on first mount
  const initializeGame = useCallback(() => {
    // Shuffle the 10 questions
    const shuffledQuestions = shuffleArray(DEFAULT_QUESTIONS).map((q) => ({
      ...q,
      // Shuffle alternatives so the correct answer isn't always in position 0
      alternativas: shuffleArray(q.alternativas),
    }))

    setQuestions(shuffledQuestions)
    setCurrentQuestionIndex(0)
    setPhase('wheel')
    setIsSpinning(false)
    setWheelRotation(0)
    setSelectedSegmentIndex(null)
    setSelectedAnswer(null)
    setScore(0)
    setCorrectCount(0)
  }, [])

  useEffect(() => {
    initializeGame()
    return () => {
      if (spinIntervalRef.current) window.clearInterval(spinIntervalRef.current)
      if (spinTimeoutRef.current) window.clearTimeout(spinTimeoutRef.current)
    }
  }, [initializeGame])

  // Handle Wheel Spin action
  const handleSpin = () => {
    if (isSpinning || phase !== 'wheel') return

    setIsSpinning(true)
    setSelectedSegmentIndex(null)

    // Segment count
    const totalSegments = WHEEL_SEGMENTS.length
    const anglePerSegment = 360 / totalSegments

    // Pick a random target segment
    const targetSegmentIndex = Math.floor(Math.random() * totalSegments)

    // To align top needle (at angle 0 or 270 offset):
    // Segment i spans [i * anglePerSegment - 90, (i+1) * anglePerSegment - 90]
    // The top needle is at 0 degrees (pointing down from top)
    // Rotation required to place mid of segment i at top needle (270 deg / -90 deg):
    const midAngle = targetSegmentIndex * anglePerSegment + anglePerSegment / 2
    const targetAngle = 360 - midAngle

    // Extra spins: 4 to 6 full turns (1440 to 2160 deg)
    const extraTurns = 360 * 4
    const newRotation =
      wheelRotation + extraTurns + ((targetAngle - (wheelRotation % 360) + 360) % 360)

    setWheelRotation(newRotation)

    // Tick sound loop during spin
    let tickCount = 0
    if (spinIntervalRef.current) window.clearInterval(spinIntervalRef.current)
    spinIntervalRef.current = window.setInterval(() => {
      playSpinTick()
      tickCount++
      if (tickCount >= 12 && spinIntervalRef.current) {
        window.clearInterval(spinIntervalRef.current)
        spinIntervalRef.current = null
      }
    }, 180)

    // Spin ends after 2.4s
    if (spinTimeoutRef.current) window.clearTimeout(spinTimeoutRef.current)
    spinTimeoutRef.current = window.setTimeout(() => {
      setIsSpinning(false)
      setSelectedSegmentIndex(targetSegmentIndex)

      // Short delay before showing the question card
      window.setTimeout(() => {
        setPhase('question')
      }, 500)
    }, 2400)
  }

  // Handle User Answer Selection
  const handleSelectAnswer = (answer: string) => {
    if (phase !== 'question' || selectedAnswer !== null) return

    setSelectedAnswer(answer)
    setPhase('feedback')

    const currentQ = questions[currentQuestionIndex]
    const isCorrect = answer === currentQ.resposta_correta

    if (isCorrect) {
      setScore((prev) => prev + 10)
      setCorrectCount((prev) => prev + 1)
      playCorrectSound()
      triggerConfetti()
    } else {
      playWrongSound()
    }
  }

  // Handle Next Question or Finish
  const handleNextQuestion = async () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setSelectedSegmentIndex(null)
      setPhase('wheel')
    } else {
      // Game Finished
      setPhase('finished')
      playFanfare()
      triggerConfetti()

      // Save Game Session score to backend
      const finalScore = score
      const finalCorrect = correctCount
      const classification = getClassification(finalScore).title

      try {
        await saveGameSession({
          score: finalScore,
          correct_count: finalCorrect,
          total_questions: questions.length,
          classification,
        })
      } catch (err) {
        console.error('Failed to save score:', err)
      }
    }
  }

  const currentQuestion = questions[currentQuestionIndex] || DEFAULT_QUESTIONS[0]
  const totalQuestions = questions.length || DEFAULT_QUESTIONS.length

  return (
    <div className="min-h-screen w-full bg-[#16283C] text-[#F1F6F6] flex flex-col justify-between selection:bg-[#D1A705] selection:text-[#16283C] relative overflow-x-hidden">
      {/* Background ambient particles */}
      <ParticleBackground />

      {/* Header */}
      {phase !== 'finished' && (
        <GameHeader
          currentRound={currentQuestionIndex + 1}
          totalRounds={totalQuestions}
          score={score}
          onOpenMenu={() => setDrawerOpen(true)}
          onResetGame={initializeGame}
        />
      )}

      {/* Main Game Arena */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-col justify-center items-center relative z-10">
        {phase === 'wheel' && (
          <div className="w-full flex flex-col items-center justify-center space-y-4 animate-fade-in">
            <div className="text-center space-y-1 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#D1A705]">
                Prevenção Combinada UFV
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-title text-[#F1F6F6]">
                Gire a Roleta do Quiz
              </h2>
              <p className="text-xs text-[#94AEC6] max-w-sm mx-auto">
                Teste seus conhecimentos sobre camisinha, PrEP, PEP, I=I e redução de danos.
              </p>
            </div>

            <Wheel
              rotation={wheelRotation}
              isSpinning={isSpinning}
              onSpin={handleSpin}
              disabled={isSpinning}
              selectedSegmentIndex={selectedSegmentIndex}
            />
          </div>
        )}

        {(phase === 'question' || phase === 'feedback') && (
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            isAnswered={phase === 'feedback'}
            onSelectAnswer={handleSelectAnswer}
            onNextQuestion={handleNextQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
          />
        )}

        {phase === 'finished' && (
          <FinalResultScreen
            score={score}
            correctCount={correctCount}
            totalQuestions={totalQuestions}
            onRestart={initializeGame}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-[11px] text-[#94AEC6]/70 border-t border-[#33506F]/30 mt-6 relative z-10">
        Mandala das ISTs — Quiz de Prevenção Combinada em Saúde Sexual • UFV
      </footer>

      {/* Navigation Drawer */}
      <NavigationDrawer open={drawerOpen} onOpenChange={setDrawerOpen} onNewGame={initializeGame} />
    </div>
  )
}
