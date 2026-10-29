import React from 'react'
import { Menu, RotateCcw, Trophy, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GameHeaderProps {
  currentRound: number
  totalRounds: number
  score?: number
  onOpenMenu?: () => void
  onResetGame?: () => void
}

export function GameHeader({
  currentRound,
  totalRounds,
  score = 0,
  onOpenMenu,
  onResetGame,
}: GameHeaderProps) {
  const progressPercent = Math.min(100, Math.max(0, ((currentRound - 1) / totalRounds) * 100))

  return (
    <header className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-3 z-20 relative">
      <div className="flex items-center justify-between">
        {/* Left: Brand title */}
        <div className="flex items-center space-x-3">
          {onOpenMenu && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onOpenMenu}
              className="text-[#94AEC6] hover:text-white hover:bg-[#1F3550] rounded-xl"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight font-title text-[#F1F6F6] flex items-center space-x-1.5">
              <span>Mandala das ISTs</span>
            </h1>
            <p className="text-[11px] text-[#D1A705] font-semibold hidden sm:block">
              Quiz com Roleta • Prevenção Combinada
            </p>
          </div>
        </div>

        {/* Right: Score and Round counter badges */}
        <div className="flex items-center space-x-2">
          {/* Score Badge */}
          <div className="px-3 py-1 bg-[#901812]/50 border border-[#901812] rounded-full flex items-center space-x-1.5 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#D1A705]" />
            <span className="text-xs font-bold text-[#F1F6F6] font-title">{score} pts</span>
          </div>

          {/* Round counter */}
          <div className="px-3 py-1 bg-[#1F3550] border border-[#33506F] rounded-full shadow-inner">
            <span className="text-xs font-semibold font-title tracking-wider text-[#F1F6F6]">
              {currentRound} de {totalRounds}
            </span>
          </div>

          {onResetGame && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onResetGame}
              title="Reiniciar jogo"
              className="text-[#94AEC6] hover:text-white hover:bg-[#1F3550] rounded-xl ml-1"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Progress track */}
      <div className="w-full h-2 bg-[#1F3550] rounded-full overflow-hidden border border-[#33506F]/40 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#901812] via-[#e63946] to-[#D1A705] transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  )
}
