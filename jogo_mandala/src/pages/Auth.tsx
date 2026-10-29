import React, { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ArrowLeft, Sparkles, LogIn, UserPlus } from 'lucide-react'
import { toast } from 'sonner'

export default function AuthPage() {
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)

    if (error) {
      toast.error('Erro ao fazer login. Verifique suas credenciais.')
    } else {
      toast.success('Login efetuado com sucesso!')
      navigate('/')
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await signUp(email, password, name)
    setLoading(false)

    if (error) {
      toast.error('Erro ao criar conta. Tente novamente.')
    } else {
      toast.success('Conta criada e autenticada com sucesso!')
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-black text-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-xs text-slate-400 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Jogo</span>
        </Link>

        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-[#901812] to-[#D1A705] flex items-center justify-center shadow-lg mb-2">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-black bg-gradient-to-r from-[#901812] via-[#c0392b] to-[#D1A705] bg-clip-text text-transparent">
            Mandala das ISTs
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Entre para salvar seus pontos e figurar no Ranking!
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 bg-slate-950/80 p-1 rounded-xl mb-4">
            <TabsTrigger
              value="login"
              className="rounded-lg text-xs font-bold data-[state=active]:bg-[#901812] data-[state=active]:text-white"
            >
              Entrar
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="rounded-lg text-xs font-bold data-[state=active]:bg-[#901812] data-[state=active]:text-white"
            >
              Cadastrar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1 text-left">
                <Label className="text-xs text-slate-300">E-mail</Label>
                <Input
                  type="email"
                  required
                  placeholder="seu.email@universidade.edu.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1 text-left">
                <Label className="text-xs text-slate-300">Senha</Label>
                <Input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white rounded-xl text-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-[#901812] to-[#D1A705] hover:brightness-110 font-bold rounded-xl flex items-center justify-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>{loading ? 'Entrando...' : 'Acessar Conta'}</span>
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-1 text-left">
                <Label className="text-xs text-slate-300">Nome de Estudante / Apelido</Label>
                <Input
                  type="text"
                  required
                  placeholder="Dr(a). Maria Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1 text-left">
                <Label className="text-xs text-slate-300">E-mail</Label>
                <Input
                  type="email"
                  required
                  placeholder="seu.email@universidade.edu.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white rounded-xl text-sm"
                />
              </div>

              <div className="space-y-1 text-left">
                <Label className="text-xs text-slate-300">Senha (mín. 8 caracteres)</Label>
                <Input
                  type="password"
                  required
                  minLength={8}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white rounded-xl text-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-[#901812] to-[#D1A705] hover:brightness-110 font-bold rounded-xl flex items-center justify-center space-x-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>{loading ? 'Cadastrando...' : 'Criar Minha Conta'}</span>
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
