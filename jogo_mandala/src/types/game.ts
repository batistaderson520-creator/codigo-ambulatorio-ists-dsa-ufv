export type ISTType =
  | 'HIV'
  | 'Sífilis'
  | 'Gonorreia'
  | 'Clamídia'
  | 'HPV'
  | 'Herpes Genital'
  | 'Hepatite B'
  | 'Tricomoníase'
  | 'Prevenção Combinada'

export interface ISTMeta {
  name: ISTType
  color: string
  icon: string
  description: string
}

export const IST_LIST: ISTMeta[] = [
  { name: 'HIV', color: '#e63946', icon: 'virus', description: 'Vírus da Imunodeficiência Humana' },
  {
    name: 'Sífilis',
    color: '#f4a261',
    icon: 'bacterium',
    description: 'Causada pelo Treponema pallidum',
  },
  {
    name: 'Gonorreia',
    color: '#2a9d8f',
    icon: 'microscope',
    description: 'Causada pela Neisseria gonorrhoeae',
  },
  {
    name: 'Clamídia',
    color: '#e9c46a',
    icon: 'dna',
    description: 'Causada pela Chlamydia trachomatis',
  },
  { name: 'HPV', color: '#9b5de5', icon: 'shield', description: 'Papilomavírus Humano' },
  {
    name: 'Herpes Genital',
    color: '#f15bb5',
    icon: 'activity',
    description: 'Causado pelo Vírus Herpes Simples',
  },
  {
    name: 'Hepatite B',
    color: '#fee440',
    icon: 'pill',
    description: 'Infecção hepática pelo Vírus HBV',
  },
  {
    name: 'Tricomoníase',
    color: '#00bbf9',
    icon: 'sparkles',
    description: 'Causada pelo Trichomonas vaginalis',
  },
  {
    name: 'Prevenção Combinada',
    color: '#901812',
    icon: 'shield',
    description: 'Estratégias combinadas de prevenção às ISTs',
  },
]

export interface Question {
  id: string
  ist: ISTType
  pergunta: string
  alternativas: string[]
  resposta_correta: string
  explicacao: string
  dificuldade?: string
}

export interface GameSession {
  id?: string
  user?: string
  score: number
  correct_count: number
  total_questions: number
  classification: string
  created?: string
  expand?: {
    user?: {
      id: string
      name?: string
      email?: string
    }
  }
}

export type GameState = 'initial' | 'spinning' | 'question' | 'feedback' | 'finished'

export function getClassification(score: number): {
  title: string
  color: string
  description: string
} {
  const percentage = (score / 100) * 100
  if (percentage <= 40) {
    return {
      title: 'Calouro na Prevenção',
      color: '#e63946',
      description:
        'Você está iniciando sua jornada! Continue estudando os métodos da Prevenção Combinada e das ISTs para fortalecer seus conhecimentos.',
    }
  } else if (percentage <= 70) {
    return {
      title: 'Agente de Saúde',
      color: '#f4a261',
      description:
        'Muito bem! Você já possui uma base sólida sobre estratégias preventivas, profilaxias e cuidados essenciais.',
    }
  } else if (percentage <= 90) {
    return {
      title: 'Especialista em Prevenção',
      color: '#2a9d8f',
      description:
        'Excelente desempenho! Seu domínio sobre PrEP, PEP, I=I e prevenção combinada está afiado!',
    }
  } else {
    return {
      title: 'Mestre da Prevenção Combinada',
      color: '#D1A705',
      description:
        'Incrível! Você acertou tudo e demonstrou domínio total sobre a Prevenção Combinada e a saúde sexual!',
    }
  }
}
