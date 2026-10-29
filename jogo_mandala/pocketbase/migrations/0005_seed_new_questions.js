migrate(
  (app) => {
    try {
      app.findFirstRecordByData(
        'questions',
        'pergunta',
        'Uma pessoa com HIV que toma o remédio certinho e está com carga viral indetectável há 6 meses...',
      )
      return
    } catch (_) {}

    const col = app.findCollectionByNameOrId('questions')
    app.truncateCollection(col)

    const seedData = [
      {
        ist: 'HIV',
        pergunta:
          'Uma pessoa com HIV que toma o remédio certinho e está com carga viral indetectável há 6 meses...',
        alternativas: [
          'Não transmite o vírus em relações sexuais',
          'Ainda transmite, só que menos',
          'Só não transmite se usar camisinha também',
          'Transmite igual a quem não trata',
        ],
        resposta_correta: 'A',
        explicacao:
          'Com carga viral indetectável por pelo menos 6 meses, a pessoa com HIV não transmite o vírus em relações sexuais. É o conceito I=I.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'HIV',
        pergunta:
          'Depois de uma situação de risco, em quanto tempo você deve procurar o posto/hospital para tomar o remédio de emergência contra HIV (PEP)?',
        alternativas: [
          'Até 72 horas (ideal: nas primeiras 2h)',
          'Até 7 dias',
          'Só depois de fazer o teste',
          'Não existe remédio de emergência',
        ],
        resposta_correta: 'A',
        explicacao:
          'A PEP deve ser iniciada até 72 horas após a exposição. Quanto antes, melhor — o ideal é nas primeiras 2 horas.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Sífilis',
        pergunta: 'Qual é o primeiro sinal da sífilis que muita gente ignora por não doer?',
        alternativas: [
          'Uma ferida única, que não dói e some sozinha',
          'Manchas vermelhas coçando muito',
          'Febre alta repentina',
          'Não tem sinal nenhum, nunca',
        ],
        resposta_correta: 'A',
        explicacao:
          'O primeiro sinal da sífilis é um cancro duro — uma ferida indolor que desaparece sozinha, mas a doença continua no corpo se não for tratada.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Sífilis',
        pergunta: 'Como se trata a sífilis (quando não há alergia)?',
        alternativas: [
          'Uma injeção de penicilina',
          'Só com pomada',
          'Vitamina C em dose alta',
          'Não tem tratamento, só controle',
        ],
        resposta_correta: 'A',
        explicacao:
          'A sífilis é tratada com penicilina benzatina, geralmente em uma única injeção para casos recentes. É simples, eficaz e gratuita pelo SUS.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Gonorreia',
        pergunta: 'Gonorreia pode ser transmitida...',
        alternativas: [
          'Em sexo vaginal, anal e oral, sem camisinha',
          'Só em sexo anal',
          'Só por transfusão de sangue',
          'Só por beijo',
        ],
        resposta_correta: 'A',
        explicacao:
          'A gonorreia se transmite em relações sexuais desprotegidas, incluindo sexo vaginal, anal e oral. O uso de camisinha é a principal forma de prevenção.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Gonorreia',
        pergunta: 'Um sintoma comum (mas nem sempre presente) da gonorreia é:',
        alternativas: [
          'Corrimento e dor ao urinar',
          'Perda de cabelo',
          'Dor de cabeça constante',
          'Manchas na pele que coçam',
        ],
        resposta_correta: 'A',
        explicacao:
          'Corrimento uretral ou vaginal e dor ao urinar são sintomas clássicos, mas muitas pessoas infectadas não apresentam sintomas.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Clamídia',
        pergunta: 'Por que a clamídia é chamada de "infecção silenciosa"?',
        alternativas: [
          'Na maioria das vezes não dá sintoma nenhum',
          'Só existe em homens',
          'Só aparece depois dos 40 anos',
          'Não existe teste para detectar',
        ],
        resposta_correta: 'A',
        explicacao:
          'A clamídia é assintomática na maioria dos casos, mas pode causar infertilidade se não for tratada. Por isso exames regulares são importantes.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'HPV',
        pergunta: 'A vacina contra HPV, oferecida gratuitamente pelo SUS, previne...',
        alternativas: [
          'Alguns tipos de câncer e verrugas genitais',
          'Apenas gripe',
          'Só funciona em mulheres',
          'Só protege depois dos 30 anos',
        ],
        resposta_correta: 'A',
        explicacao:
          'A vacina contra HPV previne câncer de colo de útero, ânus, pênis, boca e garganta, além de verrugas genitais. É gratuita para meninos e meninas.',
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
