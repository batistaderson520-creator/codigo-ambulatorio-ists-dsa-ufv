migrate(
  (app) => {
    try {
      app.findFirstRecordByData(
        'questions',
        'pergunta',
        'Seu amigo jura que pegou "alguma coisa" sentando no vaso do banheiro do RU. Isso é possível?',
      )
      return
    } catch (_) {}

    const col = app.findCollectionByNameOrId('questions')
    app.truncateCollection(col)

    const seedData = [
      {
        ist: 'Mitos e Verdades',
        pergunta:
          'Seu amigo jura que pegou "alguma coisa" sentando no vaso do banheiro do RU. Isso é possível?',
        alternativas: [
          'Não, relaxa — vírus e bactéria de IST não sobrevivem fora do corpo tempo suficiente pra isso',
          'Sim, o vaso é um foco de infecção por excelência',
          'Só se o vaso estiver molhado e você sentou direto',
          'Sim, mas o risco existe só para mulheres',
        ],
        resposta_correta:
          'Não, relaxa — vírus e bactéria de IST não sobrevivem fora do corpo tempo suficiente pra isso',
        explicacao:
          'Vírus e bactérias causadores de ISTs não sobrevivem por muito tempo fora do organismo humano. O vaso sanitário não é uma via de transmissão de ISTs. A principal forma de transmissão é por contato sexual desprotegido.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta: 'Dá pra saber só de olhar (ou vibrar) se aquele crush tem alguma IST?',
        alternativas: [
          'Não, a maioria das ISTs não dá nenhum sinal visível — nem seu "radar" nem o Tinder Bio avisam',
          'Sim, dá pra ver pelos sintomas na pele e nos olhos',
          'Sim, se a pessoa parece doente ou cansada',
          'Só se a pessoa estiver com febre no momento',
        ],
        resposta_correta:
          'Não, a maioria das ISTs não dá nenhum sinal visível — nem seu "radar" nem o Tinder Bio avisam',
        explicacao:
          'A grande maioria das ISTs é assintomática, ou seja, não apresenta nenhum sinal visível. A única forma de saber se alguém tem uma IST é fazendo exames laboratoriais. A aparência saudável não garante ausência de infecção.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta:
          '"Boquete não é sexo de verdade, então não tem risco", disse ninguém que estudou biologia. Isso é verdade?',
        alternativas: [
          'Mentira — sexo oral sem proteção também transmite IST, incluindo gonorreia e herpes na garganta',
          'Verdade, sexo oral é totalmente seguro quanto a ISTs',
          'Só tem risco se a pessoa engolir o líquido seminal',
          'Só transmite HIV pelo sexo oral, nenhuma outra IST',
        ],
        resposta_correta:
          'Mentira — sexo oral sem proteção também transmite IST, incluindo gonorreia e herpes na garganta',
        explicacao:
          'O sexo oral sem proteção é uma via de transmissão de ISTs como gonorreia, herpes, sífilis e HPV. O uso de camisinha (ou barreira de látex) durante o sexo oral é fundamental para a prevenção.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta:
          'Se rolou sem camisinha mas você tomou um banho caprichado depois, tá tudo resolvido?',
        alternativas: [
          'Não, esse banho não lava o risco embora — nada de higiene evita IST depois do ato',
          'Sim, lavar bem com sabão elimina qualquer IST',
          'Sim, se usar sabão antibacteriano e esfregar bastante',
          'Quase — só falta fazer xixi logo depois pra limpar tudo',
        ],
        resposta_correta:
          'Não, esse banho não lava o risco embora — nada de higiene evita IST depois do ato',
        explicacao:
          'Nenhum procedimento de higiene pessoal após a relação sexual é capaz de prevenir ISTs. Uma vez que houve contato desprotegido, o agente infeccioso já pode ter entrado no organismo. A prevenção deve ocorrer antes e durante o ato com o uso de camisinha.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta: 'Ela toma pílula, então tá protegida contra tudo, certo?',
        alternativas: [
          'Errado — pílula evita gravidez, ponto. Contra IST ela não faz nada',
          'Certo, a pílula anticoncepcional protege contra IST também',
          'Sim, mas só parcialmente — protege contra algumas ISTs',
          'Só não protege contra HIV, as demais sim',
        ],
        resposta_correta: 'Errado — pílula evita gravidez, ponto. Contra IST ela não faz nada',
        explicacao:
          'Os métodos anticoncepcionais hormonais (pílula, injeção, implante) previnem apenas a gravidez. Eles não oferecem nenhuma proteção contra ISTs. O único método que protege contra ISTs é a camisinha (masculina ou feminina).',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta:
          'Foi só uma vez, sem camisinha, com alguém em quem você super confia. Baixo risco?',
        alternativas: [
          'Confiança não é camisinha — uma vez já é o suficiente pra pegar uma IST',
          'Sim, uma única vez é risco praticamente zero',
          'Só se a pessoa tiver muitos parceiros além de você',
          'O risco só existe com estranhos, não com quem você confia',
        ],
        resposta_correta: 'Confiança não é camisinha — uma vez já é o suficiente pra pegar uma IST',
        explicacao:
          'Uma única relação sexual desprotegida já é suficiente para a transmissão de uma IST. A confiança no parceiro não substitui o uso de camisinha, pois a pessoa pode estar infectada e assintomática, sem saber que é portadora de uma IST.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta: 'Usar duas camisinhas ao mesmo tempo dobra a proteção?',
        alternativas: [
          'Não, na real isso aumenta o atrito e o risco de rasgar — uma só, e bem usada',
          'Sim, duas camisinhas é sempre melhor que uma',
          'Sim, mas só se forem de marcas diferentes',
          'Só funciona combinando camisinha feminina com a masculina',
        ],
        resposta_correta:
          'Não, na real isso aumenta o atrito e o risco de rasgar — uma só, e bem usada',
        explicacao:
          'Usar duas camisinhas simultaneamente (uma sobre a outra) aumenta o atrito entre elas, elevando significativamente o risco de rompimento. O correto é usar uma única camisinha corretamente, do início ao fim da relação sexual.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta: 'Dá pra pegar IST só de beijo na boca, tipo cena de novela?',
        alternativas: [
          'Sim! Herpes pode passar de boca pra boca mesmo sem nenhuma ferida aparecendo',
          'Não, beijo na boca nunca transmite nenhuma IST',
          'Só se a pessoa tiver uma ferida visível e aberta na boca',
          'Só transmite HIV pelo beijo, nenhuma outra coisa',
        ],
        resposta_correta:
          'Sim! Herpes pode passar de boca pra boca mesmo sem nenhuma ferida aparecendo',
        explicacao:
          'O vírus do herpes simples (HSV-1) pode ser transmitido pelo beijo na boca, mesmo quando não há feridas visíveis. A transmissão ocorre pelo contato com a mucosa oral. Outras ISTs, como sífilis e gonorreia, também podem ser transmitidas por contato oral.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta:
          'Transar sem camisinha durante a menstruação é mais seguro porque "já tá tudo lavando"?',
        alternativas: [
          'Não, o risco de pegar IST continua exatamente o mesmo',
          'Sim, o sangue menstrual limpa e reduz o risco de IST',
          'Sim, mas só para algumas ISTs específicas',
          'É até mais seguro porque reduz também o risco de gravidez',
        ],
        resposta_correta: 'Não, o risco de pegar IST continua exatamente o mesmo',
        explicacao:
          'A menstruação não reduz o risco de transmissão de ISTs. Pelo contrário, durante a menstruação pode haver maior susceptibilidade à infecção devido a alterações na mucosa. O uso de camisinha é indispensável em qualquer período, incluindo durante a menstruação.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta: 'IST só pega quem "pega geral", com muitos parceiros?',
        alternativas: [
          'Não — uma única relação sem proteção já é suficiente, não importa o histórico',
          'Sim, quanto mais parceiros mais risco, mas uma vez não pega',
          'Só pega quem tem vida sexual muito ativa mesmo',
          'O risco existe, mas é proporcional ao número de parceiros e uma vez é impossível',
        ],
        resposta_correta:
          'Não — uma única relação sem proteção já é suficiente, não importa o histórico',
        explicacao:
          'As ISTs não discriminam pelo número de parceiros. Uma única relação sexual desprotegida com uma pessoa infectada é suficiente para a transmissão. O histórico sexual não é um fator de proteção — o uso de camisinha em todas as relações é o que previne ISTs.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Mitos e Verdades',
        pergunta: 'Você desconfia que pode ter pego alguma IST. Qual é a jogada certa?',
        alternativas: [
          'Fazer o teste na DSA',
          'Pesquisar os sintomas no Google e se automedicar',
          'Perguntar pro colega de quarto que estuda Enfermagem',
          'Esperar passar sozinho e torcer pra não ser nada',
        ],
        resposta_correta: 'Fazer o teste na DSA',
        explicacao:
          'Pesquisar sintoma na internet só gera pânico ou falsa segurança; perguntar pro colega é fofoca, não diagnóstico. Só o teste (rápido, gratuito e sigiloso na DSA) resolve de verdade.',
        dificuldade: 'Calouro',
      },
    ]

    for (const item of seedData) {
      const record = new Record(col)
      record.set('ist', item.ist)
      record.set('pergunta', item.pergunta)
      record.set('alternativas', item.alternativas)
      record.set('resposta_correta', item.resposta_correta)
      record.set('explicacao', item.explicacao)
      record.set('dificuldade', item.dificuldade)
      app.save(record)
    }
  },
  (app) => {},
)
