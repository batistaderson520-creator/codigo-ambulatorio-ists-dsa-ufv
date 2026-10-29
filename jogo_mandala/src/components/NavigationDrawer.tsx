import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Play, Trophy, Info, User, LogOut, LogIn, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'

interface NavigationDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onNewGame: () => void
}

export function NavigationDrawer({ open, onOpenChange, onNewGame }: NavigationDrawerProps) {
  const { user, isAuthenticated, signOut } = useAuth()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-[280px] bg-[#16283C] border-r-[#33506F] text-[#F1F6F6] p-5 flex flex-col justify-between"
      >
        <div>
          <SheetHeader className="mb-6 text-left">
            <SheetTitle className="text-xl font-bold font-title text-[#F1F6F6] flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D1A705]" />
              <span>Mandala das ISTs</span>
            </SheetTitle>
            <p className="text-xs text-[#94AEC6]">Quiz de Prevenção Combinada</p>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Button
              variant="ghost"
              onClick={() => {
                onNewGame()
                onOpenChange(false)
              }}
              className="w-full justify-start text-[#F1F6F6] hover:bg-[#1F3550] rounded-xl space-x-3"
            >
              <Play className="w-4 h-4 text-[#D1A705]" />
              <span>Novo Jogo (Girar Roleta)</span>
            </Button>

            <Link to="/ranking" onClick={() => onOpenChange(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#F1F6F6] hover:bg-[#1F3550] rounded-xl space-x-3"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Placar dos Campeões</span>
              </Button>
            </Link>

            <Link to="/about" onClick={() => onOpenChange(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#F1F6F6] hover:bg-[#1F3550] rounded-xl space-x-3"
              >
                <Info className="w-4 h-4 text-sky-400" />
                <span>Prevenção Combinada</span>
              </Button>
            </Link>
          </nav>
        </div>

        {/* User Footer / Auth section */}
        <div className="pt-4 border-t border-[#33506F] space-y-3">
          {isAuthenticated ? (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs text-[#94AEC6] px-2">
                <User className="w-4 h-4 text-[#D1A705]" />
                <span className="truncate">{user?.name || user?.email}</span>
              </div>
              <Button
                onClick={() => {
                  signOut()
                  onOpenChange(false)
                }}
                variant="outline"
                className="w-full border-rose-900/50 bg-rose-950/30 text-rose-300 hover:bg-rose-900/50 rounded-xl text-xs flex items-center justify-center space-x-2"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair da Conta</span>
              </Button>
            </div>
          ) : (
            <Link to="/auth" onClick={() => onOpenChange(false)}>
              <Button className="w-full bg-[#901812] hover:bg-[#78140f] text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 border border-[#D1A705]/40 shadow-md">
                <LogIn className="w-3.5 h-3.5 text-[#D1A705]" />
                <span>Entrar / Cadastrar</span>
              </Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
