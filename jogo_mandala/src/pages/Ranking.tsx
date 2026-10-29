import React, { useEffect, useState } from 'react'
import { getTopGameSessions } from '@/services/game_sessions'
import { GameSession } from '@/types/game'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trophy, Medal, Award, User } from 'lucide-react'
import useRealtime from '@/hooks/use-realtime'

export default function RankingPage() {
  const [sessions, setSessions] = useState<GameSession[]>([])
  const [loading, setLoading] = useState(true)

  const loadRanking = async () => {
    setLoading(true)
    const items = await getTopGameSessions(15)
    setSessions(items)
    setLoading(false)
  }

  useEffect(() => {
    loadRanking()
  }, [])

  useRealtime('game_sessions', () => {
    loadRanking()
  })

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-black text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-lg">
        {/* Top Header */}
        <div className="flex items-center justify-between my-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Jogo</span>
          </Link>

          <div className="flex items-center space-x-1">
            <Trophy className="w-5 h-5 text-[#D1A705]" />
            <h1 className="text-lg font-black bg-gradient-to-r from-[#901812] via-[#c0392b] to-[#D1A705] bg-clip-text text-transparent">
              Placar dos Campeões
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center mb-6">
          Melhores pontuações registradas no Mandala das ISTs
        </p>

        {/* Ranking List */}
        {loading ? (
          <div className="text-center py-12 text-slate-500 text-sm animate-pulse">
            Carregando pontuações...
          </div>
        ) : sessions.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <Trophy className="w-10 h-10 text-slate-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-300">Nenhum registro ainda!</p>
            <p className="text-xs text-slate-500 mt-1">
              Seja o primeiro a jogar e entrar no ranking.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {sessions.map((session, index) => {
              const userName =
                session.expand?.user?.name || session.expand?.user?.email || 'Estudante Anônimo'
              const rank = index + 1

              let rankBadge = (
                <span className="text-slate-400 font-bold text-sm w-6 text-center">{rank}º</span>
              )
              if (rank === 1) {
                rankBadge = <Medal className="w-6 h-6 text-amber-400 shrink-0" />
              } else if (rank === 2) {
                rankBadge = <Medal className="w-6 h-6 text-slate-300 shrink-0" />
              } else if (rank === 3) {
                rankBadge = <Medal className="w-6 h-6 text-amber-700 shrink-0" />
              }

              return (
                <div
                  key={session.id || index}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center space-x-3 overflow-hidden pr-2">
                    {rankBadge}
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-[#D1A705]" />
                    </div>
                    <div className="truncate text-left">
                      <div className="text-sm font-bold text-white truncate">{userName}</div>
                      <div className="text-[10px] text-slate-400 flex items-center space-x-1">
                        <Award className="w-3 h-3 text-[#D1A705]" />
                        <span>{session.classification}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-base font-black text-[#D1A705]">{session.score} pts</div>
                    <div className="text-[10px] text-emerald-400 font-medium">
                      {session.correct_count}/{session.total_questions} acertos
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
