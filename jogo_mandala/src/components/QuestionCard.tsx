import React from 'react'
import { Question } from '@/types/game'
import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle, ArrowRight, Sparkles, HelpCircle } from 'lucide-react'

interface QuestionCardProps {
  question: Question
  selectedAnswer: string | null
  isAnswered: boolean
  onSelectAnswer: (answer: string) => void
  onNextQuestion: () => void
  questionNumber: number
  totalQuestions: number
}

export function QuestionCard({
  question,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
  onNextQuestion,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  const isCorrect = selectedAnswer === question.resposta_correta

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col space-y-4 animate-fade-in">
      {/* Category & Badge header */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#901812]/40 border border-[#901812] rounded-full text-xs text-[#D1A705] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#D1A705]" />
          <span>{question.ist}</span>
        </div>
        <span className="text-xs text-[#94AEC6] font-semibold">
          Pergunta {questionNumber} de {totalQuestions}
        </span>
      </div>

      {/* Question Card Box */}
      <div className="bg-[#1F3550] border border-[#33506F] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-[#D1A705]/5 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />

        <div className="flex items-start space-x-3 mb-3">
          <div className="w-7 h-7 rounded-lg bg-[#901812] flex items-center justify-center shrink-0 mt-0.5 border border-[#D1A705]/40 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#D1A705]" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold font-title text-[#F1F6F6] leading-snug">
            {question.pergunta}
          </h2>
        </div>
      </div>

      {/* Alternatives List */}
      <div className="space-y-2.5">
        {question.alternativas.map((alt, index) => {
          const letter = String.fromCharCode(65 + index) // A, B, C, D
          const isSelected = selectedAnswer === alt
          const isThisCorrect = alt === question.resposta_correta

          let itemStyles =
            'bg-[#1F3550] border-[#33506F] text-[#F1F6F6] hover:border-[#D1A705] hover:bg-[#253e5c]'
          let letterBg = 'bg-[#16283C] text-[#94AEC6] border-[#33506F]'
          let statusIcon = null

          if (isAnswered) {
            if (isThisCorrect) {
              itemStyles =
                'bg-emerald-950/60 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              letterBg = 'bg-emerald-500 text-[#16283C] border-emerald-400 font-black'
              statusIcon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
            } else if (isSelected && !isThisCorrect) {
              itemStyles = 'bg-rose-950/60 border-rose-500 text-rose-100'
              letterBg = 'bg-rose-500 text-white border-rose-400 font-black'
              statusIcon = <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
            } else {
              itemStyles = 'bg-[#1F3550]/40 border-[#33506F]/40 text-[#94AEC6] opacity-60'
              letterBg = 'bg-[#16283C]/60 text-[#94AEC6]/60 border-[#33506F]/40'
            }
          }

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => onSelectAnswer(alt)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group text-xs sm:text-sm font-medium ${itemStyles} ${
                isAnswered ? 'cursor-default' : 'cursor-pointer active:scale-[0.99]'
              }`}
            >
              <div className="flex items-center space-x-3 pr-2">
                <span
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${letterBg}`}
                >
                  {letter}
                </span>
                <span className="leading-relaxed">{alt}</span>
              </div>
              {statusIcon}
            </button>
          )
        })}
      </div>

      {/* Feedback & Explanation Box */}
      {isAnswered && (
        <div className="space-y-4 pt-1 animate-fade-in">
          <div
            className={`rounded-2xl p-4 sm:p-5 border flex flex-col space-y-2 shadow-lg ${
              isCorrect
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-100'
                : 'bg-rose-950/40 border-rose-500/50 text-rose-100'
            }`}
          >
            <div className="flex items-center space-x-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-title font-extrabold text-base text-emerald-300">
                    Resposta Correta! (+10 pontos)
                  </h3>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <h3 className="font-title font-extrabold text-base text-rose-300">
                    Resposta Incorreta!
                  </h3>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#F1F6F6]/95 leading-relaxed pt-1 border-t border-white/10">
              <strong className="text-[#D1A705]">Explicação educativa: </strong>
              {question.explicacao}
            </p>
          </div>

          {/* Continue button */}
          <Button
            onClick={onNextQuestion}
            className="w-full py-6 rounded-xl font-title font-bold text-base bg-[#D1A705] hover:bg-[#b89304] text-[#16283C] shadow-lg flex items-center justify-center space-x-2 transition-transform active:scale-[0.99]"
          >
            <span>
              {questionNumber < totalQuestions ? 'Próxima Pergunta' : 'Ver Resultado Final'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
