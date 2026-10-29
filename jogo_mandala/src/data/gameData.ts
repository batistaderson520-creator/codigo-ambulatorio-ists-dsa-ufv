import { Question, ISTType } from '@/types/game'

export const DEFAULT_QUESTIONS: Question[] = [
  {
    id: 'q1',
    ist: 'Prevenção Combinada',
    pergunta:
      'Camisinha é a única estratégia que protege contra HIV e outras IST ao mesmo tempo. Isso é verdade?',
    alternativas: [
      'Sim. A camisinha é a única que barra HIV, sífilis, gonorreia, clamídia e hepatite B de uma vez.',
      'Não, a PrEP também protege contra todas as ISTs.',
      'A camisinha só protege contra gravidez, não contra ISTs.',
      'Só protege contra HIV, as outras passam mesmo com camisinha.',
    ],
    resposta_correta:
      'Sim. A camisinha é a única que barra HIV, sífilis, gonorreia, clamídia e hepatite B de uma vez.',
    explicacao:
      'A camisinha (masculina ou feminina) é o único método que previne simultaneamente HIV, sífilis, gonorreia, clamídia e hepatite B. Os outros métodos da mandala entram por cima dela, não no lugar dela.',
  },
  {
    id: 'q2',
    ist: 'Prevenção Combinada',
    pergunta: 'Quem usa PrEP está protegido contra todas as ISTs?',
    alternativas: [
      'Não — a PrEP protege apenas contra o HIV. Sífilis, gonorreia e clamídia passam direto.',
      'Sim, a PrEP é uma proteção completa contra qualquer IST.',
      'A PrEP protege contra HIV e sífilis, só não cobre gonorreia.',
      'Só protege se tomar junto com a PEP.',
    ],
    resposta_correta:
      'Não — a PrEP protege apenas contra o HIV. Sífilis, gonorreia e clamídia passam direto.',
    explicacao:
      'A PrEP (Profilaxia Pré-Exposição) protege exclusivamente contra o HIV quando tomada corretamente. Ela não cobre sífilis, gonorreia, clamídia nem outras ISTs. Por isso, quem usa PrEP deve manter testagem a cada 3 meses e considerar o uso de camisinha para as demais ISTs.',
  },
  {
    id: 'q3',
    ist: 'Prevenção Combinada',
    pergunta:
      'A camisinha estourou durante a relação. Qual o prazo máximo para buscar a PEP no SUS?',
    alternativas: [
      'Até 72 horas após a exposição — e quanto antes, melhor.',
      'Até 24 horas, depois não adianta mais.',
      'Até 7 dias, mas só com receita médica.',
      'Até 48 horas, e precisa de encaminhamento da UBS.',
    ],
    resposta_correta: 'Até 72 horas após a exposição — e quanto antes, melhor.',
    explicacao:
      'A PEP (Profilaxia Pós-Exposição) deve ser iniciada em até 72 horas após a exposição de risco, e quanto antes melhor. É gratuita no SUS e você não precisa de encaminhamento — pode ir direto a uma emergência ou serviço de IST.',
  },
  {
    id: 'q4',
    ist: 'Prevenção Combinada',
    pergunta:
      'Uma pessoa que vive com HIV, está em tratamento e com carga viral indetectável há mais de 6 meses pode transmitir o vírus por via sexual?',
    alternativas: [
      'Não. Indetectável = Intransmissível. Carga viral indetectável há 6+ meses com tratamento em dia zera a transmissão sexual.',
      'Sim, o risco é menor, mas ainda existe.',
      'Só não transmite se usar camisinha também.',
      'Depende da carga viral da outra pessoa.',
    ],
    resposta_correta:
      'Não. Indetectável = Intransmissível. Carga viral indetectável há 6+ meses com tratamento em dia zera a transmissão sexual.',
    explicacao:
      'O conceito I=I (Indetectável = Intransmissível) é consenso científico: uma pessoa com HIV em tratamento regular e carga viral indetectável há pelo menos 6 meses não transmite o HIV por via sexual. Mas atenção: o tratamento do HIV não protege contra outras ISTs — a camisinha continua importante para sífilis, gonorreia e outras.',
  },
  {
    id: 'q5',
    ist: 'Prevenção Combinada',
    pergunta:
      'Depois de um rolê com bebida e outras substâncias, você não lembra se usou camisinha. O que fazer?',
    alternativas: [
      'Buscar a PEP em até 72h (na dúvida sobre exposição) e fazer testagem depois.',
      'Não tem o que fazer — o que passou, passou.',
      'Tomar um banho caprichado resolve.',
      'Esperar aparecer algum sintoma para agir.',
    ],
    resposta_correta:
      'Buscar a PEP em até 72h (na dúvida sobre exposição) e fazer testagem depois.',
    explicacao:
      'Redução de danos parte de onde a pessoa está, não de onde "deveria" estar. Na dúvida sobre exposição, a PEP está disponível em até 72h. Depois, a testagem transforma dúvida em resposta. Levar camisinha antes de sair e combinar cuidados com amigos também são estratégias de redução de danos.',
  },
  {
    id: 'q6',
    ist: 'Prevenção Combinada',
    pergunta: 'Testagem regular é recomendada para quem?',
    alternativas: [
      'Para todas as pessoas sexualmente ativas, especialmente quem tem múltiplos parceiros ou usa PrEP.',
      'Só para quem teve relação desprotegida.',
      'Só para pessoas com sintomas.',
      'Apenas para profissionais do sexo.',
    ],
    resposta_correta:
      'Para todas as pessoas sexualmente ativas, especialmente quem tem múltiplos parceiros ou usa PrEP.',
    explicacao:
      'A testagem regular (HIV, sífilis, hepatites B e C) é recomendada para todas as pessoas sexualmente ativas. Quem usa PrEP deve testar a cada 3 meses. Os testes rápidos são gratuitos e sigilosos no SUS. Saber o diagnóstico precoce permite tratar e interromper a cadeia de transmissão.',
  },
  {
    id: 'q7',
    ist: 'Prevenção Combinada',
    pergunta: 'As vacinas de HPV e hepatite B também fazem parte da prevenção combinada?',
    alternativas: [
      'Sim. HPV e hepatite B são ISTs preveníveis por vacina disponível no SUS.',
      'Não, vacina não tem relação com prevenção de ISTs.',
      'Só a de hepatite B, HPV não.',
      'Sim, mas só para crianças e adolescentes.',
    ],
    resposta_correta: 'Sim. HPV e hepatite B são ISTs preveníveis por vacina disponível no SUS.',
    explicacao:
      'HPV e hepatite B são ISTs preveníveis por vacina. A vacina de HPV está disponível no SUS para meninas e meninos de 9 a 14 anos (e para grupos especiais). A de hepatite B está disponível para todas as idades. Checar se suas vacinas estão em dia faz parte da prevenção combinada.',
  },
  {
    id: 'q8',
    ist: 'Prevenção Combinada',
    pergunta: 'Tratar outras ISTs (sífilis, gonorreia, clamídia) ajuda na prevenção do HIV?',
    alternativas: [
      'Sim. ISTs não tratadas causam feridas e inflamação que facilitam a entrada do HIV.',
      'Não, são coisas completamente separadas.',
      'Só a sífilis tem relação com HIV.',
      'Ajuda, mas só se for gonorreia.',
    ],
    resposta_correta:
      'Sim. ISTs não tratadas causam feridas e inflamação que facilitam a entrada do HIV.',
    explicacao:
      'ISTs como sífilis, gonorreia e clamídia causam feridas e inflamação nas mucosas, o que aumenta o risco de adquirir ou transmitir o HIV. Tratar essas ISTs rapidamente faz parte da prevenção combinada — fecha uma porta de entrada para o HIV.',
  },
  {
    id: 'q9',
    ist: 'Prevenção Combinada',
    pergunta: 'O que é prevenção combinada?',
    alternativas: [
      'Usar diferentes estratégias de prevenção ao mesmo tempo ou em sequência, conforme a situação de cada pessoa.',
      'Usar dois métodos ao mesmo tempo sempre.',
      'Tomar PrEP e PEP juntos.',
      'Usar camisinha e pílula anticoncepcional.',
    ],
    resposta_correta:
      'Usar diferentes estratégias de prevenção ao mesmo tempo ou em sequência, conforme a situação de cada pessoa.',
    explicacao:
      'Prevenção combinada significa que não existe uma única estratégia que sirva para todas as pessoas em todos os momentos. Cada pessoa combina camisinha, testagem, PrEP, PEP, vacinas e tratamento conforme sua realidade. A mandala mostra que essas estratégias se complementam.',
  },
  {
    id: 'q10',
    ist: 'Prevenção Combinada',
    pergunta:
      'A prevenção da transmissão vertical (da mãe para o bebê) do HIV e sífilis é feita durante...',
    alternativas: [
      'O pré-natal. Testagem e tratamento durante a gestação e no parto evitam a transmissão.',
      'Só depois do nascimento do bebê.',
      'Apenas no momento do parto.',
      'Não existe prevenção para transmissão vertical.',
    ],
    resposta_correta:
      'O pré-natal. Testagem e tratamento durante a gestação e no parto evitam a transmissão.',
    explicacao:
      'A transmissão vertical do HIV e da sífilis pode ser evitada com testagem e tratamento durante o pré-natal, no parto e no pós-parto. O SUS oferece testagem gratuita para todas as gestantes. Com tratamento adequado, o risco de transmissão vertical do HIV cai para menos de 1%.',
  },
]

export interface WheelSegment {
  id: string
  label: string
  color: string
  textColor: string
  category: ISTType
}

export const WHEEL_SEGMENTS: WheelSegment[] = [
  {
    id: '1',
    label: 'Camisinha',
    color: '#901812',
    textColor: '#FFFFFF',
    category: 'Prevenção Combinada',
  },
  {
    id: '2',
    label: 'PrEP',
    color: '#D1A705',
    textColor: '#16283C',
    category: 'Prevenção Combinada',
  },
  {
    id: '3',
    label: 'PEP (72h)',
    color: '#2a9d8f',
    textColor: '#FFFFFF',
    category: 'Prevenção Combinada',
  },
  {
    id: '4',
    label: 'I = I',
    color: '#9b5de5',
    textColor: '#FFFFFF',
    category: 'Prevenção Combinada',
  },
  {
    id: '5',
    label: 'Redução Danos',
    color: '#e63946',
    textColor: '#FFFFFF',
    category: 'Prevenção Combinada',
  },
  {
    id: '6',
    label: 'Testagem',
    color: '#f4a261',
    textColor: '#16283C',
    category: 'Prevenção Combinada',
  },
  {
    id: '7',
    label: 'Vacinas',
    color: '#48A0DC',
    textColor: '#FFFFFF',
    category: 'Prevenção Combinada',
  },
  {
    id: '8',
    label: 'Tratar ISTs',
    color: '#00bbf9',
    textColor: '#16283C',
    category: 'Prevenção Combinada',
  },
  {
    id: '9',
    label: 'Mandala',
    color: '#D1A705',
    textColor: '#16283C',
    category: 'Prevenção Combinada',
  },
  {
    id: '10',
    label: 'Pré-Natal',
    color: '#C46BD6',
    textColor: '#FFFFFF',
    category: 'Prevenção Combinada',
  },
]
