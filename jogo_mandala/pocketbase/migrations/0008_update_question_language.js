migrate(
  (app) => {
    const updates = [
      {
        matchPergunta:
          '"Boquete não é sexo de verdade, então não tem risco", disse ninguém que estudou biologia. Isso é verdade?',
        newPergunta:
          '"Sexo oral não conta como sexo de verdade, então não tem risco." Isso é mito ou verdade?',
        newAlternativas: [
          'Mito — sexo oral sem proteção também transmite IST, como gonorreia e herpes na garganta',
          'Verdade: sexo oral é totalmente seguro em relação às IST',
          'Só tem risco se houver contato com o esperma',
          'Pelo sexo oral só se transmite HIV, nenhuma outra IST',
        ],
        newResposta:
          'Mito — sexo oral sem proteção também transmite IST, como gonorreia e herpes na garganta',
      },
      {
        matchPergunta: 'IST só pega quem "pega geral", com muitos parceiros?',
        newPergunta: 'IST só acontece com quem tem muitos parceiros?',
        newAlternativas: [
          'Não — uma única relação sem proteção já é suficiente, independentemente do histórico',
          'Sim: quanto mais parceiros, mais risco — mas uma vez só não acontece',
          'Só acontece com quem tem uma vida sexual muito ativa',
          'O risco existe, mas é proporcional ao número de parceiros — e uma vez só é impossível',
        ],
        newResposta:
          'Não — uma única relação sem proteção já é suficiente, independentemente do histórico',
      },
      {
        matchPergunta:
          'Foi só uma vez, sem camisinha, com alguém em que você super confia. Baixo risco?',
        newPergunta:
          'Foi só uma vez, sem camisinha, com alguém de total confiança. O risco é baixo?',
        newAlternativas: [
          'Confiar não é o mesmo que se proteger — uma vez só já basta para transmitir uma IST',
          'Sim: uma única vez tem risco praticamente zero',
          'Só se essa pessoa tiver outros parceiros além de você',
          'O risco só existe com desconhecidos, não com quem a gente confia',
        ],
        newResposta:
          'Confiar não é o mesmo que se proteger — uma vez só já basta para transmitir uma IST',
      },
      {
        matchPergunta:
          'Se rolou sem camisinha mas você tomou um banho caprichado depois, tá tudo resolvido?',
        newPergunta:
          'Se a relação foi sem camisinha, mas você tomou um banho caprichado depois, está tudo resolvido?',
        newAlternativas: [
          'Não: o banho não elimina o risco — nenhuma higiene evita uma IST depois da relação',
          'Sim: lavar bem com sabonete elimina qualquer IST',
          'Sim, desde que use sabonete antibacteriano e esfregue bastante',
          'Quase — só falta urinar logo depois para limpar tudo',
        ],
        newResposta:
          'Não: o banho não elimina o risco — nenhuma higiene evita uma IST depois da relação',
      },
      {
        matchPergunta: 'Dá pra saber só de olhar (ou vibrar) se aquele crush tem alguma IST?',
        newPergunta: 'Dá pra saber só de olhar se aquele crush tem alguma IST?',
        newAlternativas: [
          'Não: a maioria das IST não apresenta nenhum sinal visível — não dá para saber pela aparência',
          'Sim, dá para perceber pelos sintomas na pele e nos olhos',
          'Sim, quando a pessoa parece doente ou cansada',
          'Só quando a pessoa está com febre no momento',
        ],
        newResposta:
          'Não: a maioria das IST não apresenta nenhum sinal visível — não dá para saber pela aparência',
      },
    ]

    for (const item of updates) {
      try {
        const record = app.findFirstRecordByData('questions', 'pergunta', item.matchPergunta)
        record.set('pergunta', item.newPergunta)
        record.set('alternativas', item.newAlternativas)
        record.set('resposta_correta', item.newResposta)
        app.save(record)
      } catch (_) {}
    }
  },
  (app) => {},
)
