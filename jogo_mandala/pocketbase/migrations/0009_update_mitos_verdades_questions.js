migrate(
  (app) => {
    const menstruationTexts = [
      'Transar sem camisinha durante a menstruação é mais seguro porque "já tá tudo lavando"?',
      "Transar sem camisinha durante a menstruação é mais seguro porque 'já tá tudo lavando'?",
    ]

    for (const text of menstruationTexts) {
      try {
        const record = app.findFirstRecordByData('questions', 'pergunta', text)
        app.delete(record)
      } catch (_) {}
    }

    const beijoMatches = [
      'Dá pra pegar IST só de beijo na boca, tipo cena de novela?',
      'Dá pra pegar IST só de um beijo na boca, tipo cena de novela?',
    ]

    const beijoUpdate = {
      pergunta: 'Dá pra pegar IST só de um beijo na boca, tipo cena de novela?',
      alternativas: [
        'Quase nunca. O herpes labial pode passar no beijo, mas ele não é classificado como IST',
        'Sim, o beijo transmite as mesmas ISTs que o sexo',
        'Não, beijo na boca nunca transmite nada',
        'Só transmite HIV pelo beijo, nenhuma outra coisa',
      ],
      resposta_correta:
        'Quase nunca. O herpes labial pode passar no beijo, mas ele não é classificado como IST',
      explicacao:
        'O que pode passar no beijo é o herpes oral (HSV-1), que é muito comum, não é considerado IST e pode ser transmitido mesmo sem feridas visíveis. As ISTs, como sífilis e gonorreia, são transmitidas pelo contato sexual (oral, vaginal ou anal). Beijo não é rota usual de transmissão de ISTs.',
    }

    for (const text of beijoMatches) {
      try {
        const record = app.findFirstRecordByData('questions', 'pergunta', text)
        record.set('pergunta', beijoUpdate.pergunta)
        record.set('alternativas', beijoUpdate.alternativas)
        record.set('resposta_correta', beijoUpdate.resposta_correta)
        record.set('explicacao', beijoUpdate.explicacao)
        app.save(record)
      } catch (_) {}
    }

    const sexoOralMatches = [
      '"Boquete não é sexo de verdade, então não tem risco", disse ninguém que estudou biologia. Isso é verdade?',
      '"Sexo oral não conta como sexo de verdade, então não tem risco." Isso é mito ou verdade?',
    ]

    const sexoOralUpdate = {
      pergunta: '"Sexo oral não é sexo de verdade, então não tem risco". Isso é verdade?',
      alternativas: [
        'Mentira. Sexo oral sem proteção transmite IST: gonorreia, sífilis, clamídia, herpes e HPV pegam na boca e na garganta',
        'Verdade, sexo oral não transmite nenhuma IST',
        'Só transmite IST se a pessoa tiver sintomas visíveis',
        'Sexo oral só transmite HIV',
      ],
      resposta_correta:
        'Mentira. Sexo oral sem proteção transmite IST: gonorreia, sífilis, clamídia, herpes e HPV pegam na boca e na garganta',
      explicacao:
        'É possível adquirir ISTs na boca e na garganta pelo sexo oral sem proteção, incluindo gonorreia, sífilis, clamídia, herpes e HPV. O risco de HIV pelo sexo oral é muito baixo. Dá pra reduzir o risco usando camisinha ou barreira de látex também no sexo oral. E o teste rápido na DSA é gratuito e sigiloso.',
    }

    for (const text of sexoOralMatches) {
      try {
        const record = app.findFirstRecordByData('questions', 'pergunta', text)
        record.set('pergunta', sexoOralUpdate.pergunta)
        record.set('alternativas', sexoOralUpdate.alternativas)
        record.set('resposta_correta', sexoOralUpdate.resposta_correta)
        record.set('explicacao', sexoOralUpdate.explicacao)
        app.save(record)
      } catch (_) {}
    }
  },
  (app) => {},
)
