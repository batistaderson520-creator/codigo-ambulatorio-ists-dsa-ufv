import React from 'react'
import { Button } from '@/components/ui/button'
import { RotateCcw, Trophy, Award, CheckCircle, XCircle, Share2 } from 'lucide-react'
import { getClassification } from '@/types/game'
import { Link } from 'react-router-dom'

interface FinalResultScreenProps {
  score: number
  correctCount: number
  totalQuestions: number
  onRestart: () => void
}

export function FinalResultScreen({
  score,
  correctCount,
  totalQuestions,
  onRestart,
}: FinalResultScreenProps) {
  const classification = getClassification(score)
  const percentage = Math.round((correctCount / Math.max(1, totalQuestions)) * 100)

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 flex flex-col items-center text-center space-y-6 animate-fade-in">
      {/* Top Trophy / Badge with UFV style */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#901812] to-[#D1A705] p-1 shadow-[0_0_35px_rgba(209,167,5,0.35)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#16283C] flex items-center justify-center">
            <Trophy className="w-12 h-12 text-[#D1A705]" />
          </div>
        </div>
      </div>

      {/* Main Score & Title */}
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-widest font-bold text-[#D1A705]">
          Quiz Finalizado
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-title text-[#F1F6F6]">
          {classification.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#94AEC6] max-w-md mx-auto leading-relaxed">
          {classification.description}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="w-full grid grid-cols-3 gap-3 pt-2">
        <div className="bg-[#1F3550] border border-[#33506F] rounded-2xl p-4 flex flex-col items-center justify-center">
          <span className="text-[11px] text-[#94AEC6] uppercase tracking-wider mb-1">
            Pontuação
          </span>
          <span className="font-title text-2xl sm:text-3xl font-black text-[#D1A705]">{score}</span>
          <span className="text-[10px] text-[#94AEC6]">de 100 pts</span>
        </div>

        <div className="bg-[#1F3550] border border-[#33506F] rounded-2xl p-4 flex flex-col items-center justify-center">
          <span className="text-[11px] text-[#94AEC6] uppercase tracking-wider mb-1">Acertos</span>
          <span className="font-title text-2xl sm:text-3xl font-black text-emerald-400">
            {correctCount}/{totalQuestions}
          </span>
          <span className="text-[10px] text-[#94AEC6]">perguntas</span>
        </div>

        <div className="bg-[#1F3550] border border-[#33506F] rounded-2xl p-4 flex flex-col items-center justify-center">
          <span className="text-[11px] text-[#94AEC6] uppercase tracking-wider mb-1">
            Aproveitamento
          </span>
          <span className="font-title text-2xl sm:text-3xl font-black text-sky-400">
            {percentage}%
          </span>
          <span className="text-[10px] text-[#94AEC6]">de precisão</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3 pt-2">
        <Button
          onClick={onRestart}
          className="w-full py-6 rounded-xl font-title font-bold text-base bg-[#901812] hover:bg-[#78140f] text-white shadow-lg flex items-center justify-center space-x-2 border border-[#D1A705]/40 transition-all active:scale-[0.99]"
        >
          <RotateCcw className="w-5 h-5 text-[#D1A705]" />
          <span>Jogar Novamente</span>
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <Link to="/ranking" className="w-full">
            <Button
              variant="outline"
              className="w-full py-5 rounded-xl border-[#33506F] bg-[#1F3550] text-[#F1F6F6] hover:bg-[#253e5c] text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <Award className="w-4 h-4 text-[#D1A705]" />
              <span>Ver Placar Geral</span>
            </Button>
          </Link>

          <Link to="/about" className="w-full">
            <Button
              variant="outline"
              className="w-full py-5 rounded-xl border-[#33506F] bg-[#1F3550] text-[#F1F6F6] hover:bg-[#253e5c] text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <span>Conteúdo Educativo</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
