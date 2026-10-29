import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const PREVENCAO_TOPICS = [
  {
    id: 'camisinha',
    titulo: '1. Preservativos e Gel Lubrificante',
    resumo: 'Barreira mecânica completa contra HIV e todas as outras ISTs.',
    detalhes:
      'A camisinha (masculina ou feminina) é a única tecnologia de prevenção que protege simultaneamente contra o HIV, sífilis, gonorreia, clamídia, hepatite B e outras ISTs. O gel lubrificante à base de água evita o rompimento e aumenta o conforto.',
  },
  {
    id: 'prep',
    titulo: '2. PrEP (Profilaxia Pré-Exposição)',
    resumo: 'Proteção direcionada ao HIV antes da relação.',
    detalhes:
      'A PrEP consiste no uso diário ou sob demanda de antirretrovirais para pessoas não infectadas prevenirem o HIV. É extremamente eficaz contra o HIV, mas não protege contra as demais ISTs (sífilis, gonorreia, clamídia). Por isso, exige testagem trimestral.',
  },
  {
    id: 'pep',
    titulo: '3. PEP (Profilaxia Pós-Exposição)',
    resumo: 'Urgência médica após risco: buscar em até 72 horas.',
    detalhes:
      'A PEP deve ser iniciada o mais rápido possível em caso de falha da camisinha, violência sexual ou relação desprotegida, no prazo máximo de 72 horas. O tratamento dura 28 dias e está disponível gratuitamente em UPAs e hospitais pelo SUS.',
  },
  {
    id: 'ii',
    titulo: '4. I = I (Indetectável = Intransmissível)',
    resumo: 'Tratamento como prevenção no HIV.',
    detalhes:
      'Pessoas vivendo com HIV em tratamento antirretroviral contínuo com carga viral indetectável há pelo menos 6 meses não transmitem o HIV por via sexual. O tratamento do HIV não barra outras ISTs, mantendo o papel do preservativo para sífilis e gonorreia.',
  },
  {
    id: 'danos',
    titulo: '5. Redução de Danos',
    resumo: 'Cuidado pragmático e sem julgamentos.',
    detalhes:
      'Estratégia voltada para minimizar riscos associados ao uso de substâncias, como planejamento antes dos eventos, levar preservativos, manter hidratação e recorrer à PEP em caso de dúvida sobre a exposição.',
  },
  {
    id: 'testagem',
    titulo: '6. Testagem Regular',
    resumo: 'Diagnóstico precoce gratuito e sigiloso no SUS.',
    detalhes:
      'Testes rápidos para HIV, sífilis e hepatites B e C ficam prontos em 20 minutos na rede pública. Testar periodicamente interrompe a cadeia de transmissão e garante início precoce de cuidados.',
  },
  {
    id: 'vacinas',
    titulo: '7. Imunização (HPV e Hepatite B)',
    resumo: 'Vacinas gratuitas disponíveis no Calendário do SUS.',
    detalhes:
      'A vacina de hepatite B está disponível para todas as faixas etárias. A vacina de HPV protege contra tipos oncogênicos do vírus e lesões genitais, disponibilizada para jovens de 9 a 14 anos e pessoas imunossuprimidas.',
  },
  {
    id: 'tratar_ists',
    titulo: '8. Diagnóstico e Tratamento das outras ISTs',
    resumo: 'Fechar as portas de entrada nas mucosas.',
    detalhes:
      'Feridas ou inflamações causadas por sífilis, clamídia ou gonorreia facilitam a transmissão do HIV. O diagnóstico rápido e o tratamento com antibióticos protegem a saúde individual e coletiva.',
  },
  {
    id: 'vertical',
    titulo: '9. Prevenção da Transmissão Vertical',
    resumo: 'Cuidado durante o pré-natal, parto e amamentação.',
    detalhes:
      'Com testagem e tratamento oportunos da gestante no pré-natal, a transmissão vertical de HIV e sífilis é praticamente eliminada, garantindo o nascimento de bebês saudáveis.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#16283C] text-[#F1F6F6] p-4 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between my-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-1.5 text-xs text-[#94AEC6] hover:text-[#D1A705] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Quiz</span>
          </Link>

          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-[#D1A705]" />
            <h1 className="text-lg font-bold font-title text-[#F1F6F6]">Prevenção Combinada</h1>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-[#1F3550] border border-[#33506F] rounded-2xl p-5 mb-6 text-xs sm:text-sm text-[#94AEC6] space-y-2 leading-relaxed shadow-lg">
          <div className="flex items-center space-x-2 text-[#D1A705] font-bold text-sm sm:text-base">
            <ShieldCheck className="w-5 h-5" />
            <span>O que é a Mandala de Prevenção Combinada?</span>
          </div>
          <p>
            A Prevenção Combinada é a associação de diferentes intervenções biomédicas,
            comportamentais e estruturais, adaptadas à realidade e às escolhas de cada indivíduo.
            Nenhum método isolado substitui todos os outros: eles se somam para garantir proteção
            integral contra o HIV e as demais ISTs.
          </p>
        </div>

        {/* Accordion of prevention topics */}
        <Accordion type="single" collapsible className="space-y-2.5">
          {PREVENCAO_TOPICS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-[#1F3550] border border-[#33506F] rounded-2xl px-4 py-1"
            >
              <AccordionTrigger className="hover:no-underline text-left">
                <div className="flex items-start space-x-3 pr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D1A705] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-[#F1F6F6] block">{item.titulo}</span>
                    <span className="text-[11px] text-[#94AEC6] font-normal">{item.resumo}</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-[#94AEC6] pt-2 pb-3 border-t border-[#33506F]/60 space-y-3 leading-relaxed">
                <p>{item.detalhes}</p>
                <div className="p-2.5 rounded-xl bg-[#16283C] border border-[#33506F] flex items-center space-x-2 text-[11px] text-emerald-300">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#D1A705]" />
                  <span>Todas as profilaxias, testes e medicamentos estão disponíveis no SUS.</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
