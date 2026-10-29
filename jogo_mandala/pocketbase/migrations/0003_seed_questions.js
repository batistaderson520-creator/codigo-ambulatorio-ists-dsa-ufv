migrate(
  (app) => {
    try {
      const existing = app.findFirstRecordByData('questions', 'ist', 'HIV')
      if (existing) return
    } catch (_) {}

    const col = app.findCollectionByNameOrId('questions')

    const seedData = [
      // HIV
      {
        ist: 'HIV',
        pergunta:
          'Qual é o principal método de prevenção da transmissão vertical do HIV na gestação?',
        alternativas: [
          'A) Uso de ARV pela mãe e recém-nascido com contraindicação do aleitamento',
          'B) Parto vaginal obrigatório em todas as pacientes',
          'C) Vacinação contra hepatite B durante o primeiro trimestre',
          'D) Uso isolado de preservativo masculino na gestação',
        ],
        resposta_correta:
          'A) Uso de ARV pela mãe e recém-nascido com contraindicação do aleitamento',
        explicacao:
          'A terapia antirretroviral na gestante, o manejo adequado do parto e a suspensão da amamentação reduzem o risco de transmissão vertical para menos de 1%.',
        dificuldade: 'Interno',
      },
      {
        ist: 'HIV',
        pergunta:
          'Em quanto tempo após a exposição de risco a Profilaxia Pós-Exposição (PEP) deve ser iniciada idealmente?',
        alternativas: [
          'A) Nas primeiras 2 horas, máximo até 72 horas',
          'B) Até 7 dias após o contato',
          'C) Somente após confirmação da sorologia do parceiro',
          'D) A qualquer momento antes de 30 dias',
        ],
        resposta_correta: 'A) Nas primeiras 2 horas, máximo até 72 horas',
        explicacao:
          'A PEP deve ser iniciada o mais rápido possível, preferencialmente nas primeiras 2 horas e no máximo até 72 horas após a exposição.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'HIV',
        pergunta:
          "O conceito 'Indetectável = Intransmissível' (I=I) significa que uma pessoa vivendo com HIV com carga viral indetectável há pelo menos 6 meses:",
        alternativas: [
          'A) Não transmite o vírus por via sexual',
          'B) Está curada da infecção',
          'C) Pode interromper o tratamento antirretroviral',
          'D) Transmite o vírus apenas com carga viral acima de zero',
        ],
        resposta_correta: 'A) Não transmite o vírus por via sexual',
        explicacao:
          'Pessoas com carga viral indetectável mantida por no mínimo 6 meses não transmitem o HIV em relações sexuais.',
        dificuldade: 'Calouro',
      },

      // Sífilis
      {
        ist: 'Sífilis',
        pergunta: 'Qual é a manifestação clínica clássica da Sífilis Primária?',
        alternativas: [
          'A) Cancro duro (úlcera indolora de base limpa)',
          'B) Roséola sifilítica difusa nas palmas das mãos',
          'C) Goma sifilítica e lesões destrutivas',
          'D) Condiloma plano anogenital sangrante',
        ],
        resposta_correta: 'A) Cancro duro (úlcera indolora de base limpa)',
        explicacao:
          'O cancro duro surge no local de inoculação do Treponema pallidum, sendo uma lesão ulcerada única e indolor que cicatriza espontaneamente.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Sífilis',
        pergunta:
          'Qual o tratamento de escolha para Sífilis Secundária em paciente sem alergia a penicilinas?',
        alternativas: [
          'A) Penicilina G Benzatina 2,4 milhões UI, dose única',
          'B) Doxiciclina 100mg por 30 dias',
          'C) Ceftriaxona 1g IV por 14 dias',
          'D) Azitromicina 1g via oral dose única',
        ],
        resposta_correta: 'A) Penicilina G Benzatina 2,4 milhões UI, dose única',
        explicacao:
          'A Sífilis recente (primária, secundária e latente recente) é tratada com Penicilina G benzatina 2,4 milhões UI em dose única.',
        dificuldade: 'Interno',
      },
      {
        ist: 'Sífilis',
        pergunta:
          'O teste VDRL é classificado como um teste de qual tipo para diagnóstico da sífilis?',
        alternativas: [
          'A) Não treponêmico (cardiolipínico)',
          'B) Treponêmico direto de imunofluorescência',
          'C) Teste molecular por PCR sintético',
          'D) Teste rápido de imunocromatografia específica',
        ],
        resposta_correta: 'A) Não treponêmico (cardiolipínico)',
        explicacao:
          'O VDRL é um teste não treponêmico utilizado para rastreio e seguimento de cura, podendo apresentar falso-positivos em outras condições.',
        dificuldade: 'Interno',
      },

      // Gonorreia
      {
        ist: 'Gonorreia',
        pergunta: 'Qual o agente etiológico da Gonorreia e seu aspecto à bacterioscopia?',
        alternativas: [
          'A) Neisseria gonorrhoeae (Diplococo Gram-negativo intracelular)',
          'B) Chlamydia trachomatis (Bacilo Gram-positivo)',
          'C) Treponema pallidum (Espiroqueta móvel)',
          'D) Mycoplasma genitalium (Fungo leveduriforme)',
        ],
        resposta_correta: 'A) Neisseria gonorrhoeae (Diplococo Gram-negativo intracelular)',
        explicacao:
          'A N. gonorrhoeae é um diplococo Gram-negativo que frequentemente se localiza no interior de polimorfonucleares.',
        dificuldade: 'Residente',
      },
      {
        ist: 'Gonorreia',
        pergunta:
          'Qual o esquema terapêutico empiricamente recomendado para corrimento uretral masculino sintomático (Síndrome da Uretrite)?',
        alternativas: [
          'A) Ceftriaxona 500mg IM + Azitromicina 1g VO',
          'B) Ciprofloxacino 500mg VO por 10 dias',
          'C) Metronidazol 2g VO dose única',
          'D) Benzilpenicilina 1,2 milhões UI IM',
        ],
        resposta_correta: 'A) Ceftriaxona 500mg IM + Azitromicina 1g VO',
        explicacao:
          'O tratamento empírico cobre tanto a Neisseria gonorrhoeae (Ceftriaxona) quanto a Chlamydia trachomatis (Azitromicina ou Doxiciclina).',
        dificuldade: 'Interno',
      },
      {
        ist: 'Gonorreia',
        pergunta:
          'Qual complicação grave e não tratada da gonorreia em mulheres pode levar à infertilidade?',
        alternativas: [
          'A) Doença Inflamatória Pélvica (DIP)',
          'B) Síndrome de Reiter primária',
          'C) Cistite intersticial crônica',
          'D) Vaginose bacteriana recorrente',
        ],
        resposta_correta: 'A) Doença Inflamatória Pélvica (DIP)',
        explicacao:
          'A proliferação bacteriana ascendente pode causar salpingite, endometrite e abscesso tubo-ovariano, resultando em obstrução tubária e infertilidade.',
        dificuldade: 'Calouro',
      },

      // Clamídia
      {
        ist: 'Clamídia',
        pergunta:
          'Qual das alternativas caracteriza a infecção por Chlamydia trachomatis na maioria das mulheres?',
        alternativas: [
          'A) É frequentemente assintomática (em até 70-80% dos casos)',
          'B) Apresenta úlceras dolorosas com exsudato purulento',
          'C) Evolui com febre alta e erupção cutânea difusa',
          'D) Causa icterícia e hepatomegalia dolorosa',
        ],
        resposta_correta: 'A) É frequentemente assintomática (em até 70-80% dos casos)',
        explicacao:
          'A infecção por Clamídia é predominantemente assintomática, tornando o rastreio preventivo crucial para evitar sequelas pélvicas.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Clamídia',
        pergunta:
          'O sorotipo L1, L2 e L3 da Chlamydia trachomatis é responsável por qual apresentação clínica?',
        alternativas: [
          'A) Linfofgranuloma Venéreo (LGV)',
          'B) Tracoma ocular crônico endemicamente adquirido',
          'C) Uretrite não gonocócica simples',
          'D) Condiloma acuminado anogenital',
        ],
        resposta_correta: 'A) Linfofgranuloma Venéreo (LGV)',
        explicacao:
          'Os sorotipos L1-L3 causam o Linfofgranuloma Venéreo, caracterizado por pápula/úlcera transitória seguida de linfadenopatia inguinal dolorosa com fístulas.',
        dificuldade: 'Residente',
      },
      {
        ist: 'Clamídia',
        pergunta:
          'Em um neonato exposto à Clamídia durante o parto vaginal, quais são as complicações clássicas esperadas?',
        alternativas: [
          'A) Conjuntivite neonatal e Pneumonia intersticial',
          'B) Sepse precoce fulminante e Meningite',
          'C) Surdez neurossensorial e Catarata congênita',
          'D) Malformação cardíaca e Osteofitose',
        ],
        resposta_correta: 'A) Conjuntivite neonatal e Pneumonia intersticial',
        explicacao:
          'O recém-nascido contaminado no canal de parto pode desenvolver conjuntivite infecciosa entre 5-12 dias e pneumonia afebril entre 1-3 meses.',
        dificuldade: 'Interno',
      },

      // HPV
      {
        ist: 'HPV',
        pergunta:
          'Quais sorotipos do HPV estão predominantemente associados ao Câncer do Colo do Útero?',
        alternativas: ['A) HPV 16 e 18', 'B) HPV 6 e 11', 'C) HPV 1 e 2', 'D) HPV 31 e 42'],
        resposta_correta: 'A) HPV 16 e 18',
        explicacao:
          'Os sorotipos 16 e 18 são oncogênicos de alto risco, responsáveis por cerca de 70% dos casos de câncer de colo uterino no mundo.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'HPV',
        pergunta:
          'Os condilomas acuminados (verrugas anogenitais) são causados principalmente por quais sorotipos do HPV?',
        alternativas: [
          'A) HPV 6 e 11 (baixo risco oncogênico)',
          'B) HPV 16 e 18 (alto risco oncogênico)',
          'C) HPV 33 e 45',
          'D) HPV 52 e 58',
        ],
        resposta_correta: 'A) HPV 6 e 11 (baixo risco oncogênico)',
        explicacao:
          'Os sorotipos 6 e 11 são responsáveis por mais de 90% das verrugas genitais benignas (condilomas acuminados).',
        dificuldade: 'Calouro',
      },
      {
        ist: 'HPV',
        pergunta:
          'No Sistema Único de Saúde (SUS), a vacina quadrivalente contra o HPV é recomendada para qual faixa etária prioritária de meninas e meninos?',
        alternativas: [
          'A) De 9 a 14 anos',
          'B) A partir dos 18 anos exclusivamente',
          'C) De 0 a 5 anos',
          'D) Apenas para gestantes de qualquer idade',
        ],
        resposta_correta: 'A) De 9 a 14 anos',
        explicacao:
          'A vacinação escolar e em postos de saúde foca na faixa de 9 a 14 anos para garantir resposta imune prévia ao início da vida sexual.',
        dificuldade: 'Interno',
      },

      // Herpes Genital
      {
        ist: 'Herpes Genital',
        pergunta:
          'Qual a apresentação dermatológica típica da primoinfecção por Vírus do Herpes Simples (HSV-2)?',
        alternativas: [
          'A) Agrupamento de vesículas sobre base eritematosa que se rompem formando erosões dolorosas',
          'B) Placa eritematosa descamativa e indolor que não coça',
          'C) Nódulo único exsudativo de consistência endurecida',
          'D) Lesões bolhosas extensas com necrose hemorrágica profunda',
        ],
        resposta_correta:
          'A) Agrupamento de vesículas sobre base eritematosa que se rompem forming erosões dolorosas',
        explicacao:
          'As vesículas herpéticas surgem em cachos, são bastante dolorosas e se rompem rapidamente criando pequenas úlceras rasas.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Herpes Genital',
        pergunta:
          'Qual o fármaco antiviral de primeira linha utilizado para atenuar as crises de Herpes Genital?',
        alternativas: [
          'A) Aciclovir (ou Valaciclovir/Famciclovir)',
          'B) Azitromicina',
          'C) Metronidazol',
          'D) Penicilina Procaína',
        ],
        resposta_correta: 'A) Aciclovir (ou Valaciclovir/Famciclovir)',
        explicacao:
          'Antivirais como o aciclovir inibem a replicação viral, reduzindo a duração das lesões e o tempo de eliminação do vírus.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Herpes Genital',
        pergunta:
          'Qual conduta em relação à via de parto é indicada em gestantes com lesões herpéticas genitais ativas no momento do trabalho de parto?',
        alternativas: [
          'A) Indicação de Cesariana',
          'B) Parto vaginal com aplicação local de antisséptico',
          'C) Parto instrumentalizado com fórceps',
          'D) Aguardar cura espontânea sem intervir no parto',
        ],
        resposta_correta: 'A) Indicação de Cesariana',
        explicacao:
          'Lesões herpéticas ativas no canal de parto indicam cesariana para prevenir o herpes neonatal, que possui alta morbimortalidade.',
        dificuldade: 'Interno',
      },

      // Hepatite B
      {
        ist: 'Hepatite B',
        pergunta:
          'Qual marcador sorológico indica infecção ATIVA e réplica viral do Vírus da Hepatite B (HBV)?',
        alternativas: [
          'A) HBsAg e HBeAg positivos',
          'B) Anti-HBs isolado positivo',
          'C) Anti-HBC IgG isolado positivo',
          'D) Anti-HBe positivo com HBsAg negativo',
        ],
        resposta_correta: 'A) HBsAg e HBeAg positivos',
        explicacao:
          'O HBsAg é o antígeno de superfície (indica presença do vírus) e o HBeAg é o antígeno e (indica alta replicação viral e infectividade).',
        dificuldade: 'Residente',
      },
      {
        ist: 'Hepatite B',
        pergunta:
          'Qual perfil sorológico confirma IMUNIDADE conferida exclusivamente por VACINAÇÃO contra Hepatite B?',
        alternativas: [
          'A) Anti-HBs positivo com HBsAg e Anti-HBc negativos',
          'B) Anti-HBc total positivo e Anti-HBs negativo',
          'C) HBsAg positivo e Anti-HBs positivo',
          'D) HBeAg positivo e Anti-HBc IgM positivo',
        ],
        resposta_correta: 'A) Anti-HBs positivo com HBsAg e Anti-HBc negativos',
        explicacao:
          'A vacina contém apenas a proteína de superfície (HBsAg recombinante), induzindo apenas anticorpos Anti-HBs protetores.',
        dificuldade: 'Interno',
      },
      {
        ist: 'Hepatite B',
        pergunta:
          'Além da via sexual, a Hepatite B é transmitida eficientemente por qual outra via de contágio?',
        alternativas: [
          'A) Via parenteral (sangue e fluidos corporais) e vertical',
          'B) Inalação de gotículas no ar e fômites secos',
          'C) Consumo de água contaminada por esgoto',
          'D) Picada de mosquitos vetores do gênero Aedes',
        ],
        resposta_correta: 'A) Via parenteral (sangue e fluidos corporais) e vertical',
        explicacao:
          'O HBV possui alta infectividade por contato com sangue, agulhas, lâminas, via perinatal ou relações sexuais desprotegidas.',
        dificuldade: 'Calouro',
      },

      // Tricomoníase
      {
        ist: 'Tricomoníase',
        pergunta:
          'Qual é o agente etiológico da Tricomoníase e qual sua classificação microbiológica?',
        alternativas: [
          'A) Trichomonas vaginalis (Protozoário flagelado)',
          'B) Gardnerella vaginalis (Bactéria anaeróbia)',
          'C) Candida albicans (Fungo filamentoso)',
          'D) Mobiluncus mulieris (Bactéria Gram-variável)',
        ],
        resposta_correta: 'A) Trichomonas vaginalis (Protozoário flagelado)',
        explicacao:
          'O T. vaginalis é um protozoário flagelado móvel que habita o trato genital humano masculino e feminino.',
        dificuldade: 'Calouro',
      },
      {
        ist: 'Tricomoníase',
        pergunta:
          'Qual a característica típica do corrimento e do colo uterino na Tricomoníase ao exame especular?',
        alternativas: [
          "A) Corrimento amarelo-esverdeado bolhoso e colo 'em framboesa' (com pontilhados hemorrágicos)",
          'B) Corrimento branco grumoso em aspecto de leite coalhado e colo liso',
          'C) Corrimento cinzento fluido com odor fétido de peixe sem inflamação',
          'D) Presença de placas esbranquiçadas aderidas e crostas ulceradas',
        ],
        resposta_correta:
          "A) Corrimento amarelo-esverdeado bolhoso e colo 'em framboesa' (com pontilhados hemorrágicos)",
        explicacao:
          'O corrimento fluído, fétido, espumoso/bolhoso e a cervicite ponteada (colo em framboesa/morangiforme) são achados clássicos.',
        dificuldade: 'Interno',
      },
      {
        ist: 'Tricomoníase',
        pergunta:
          'Qual a medicação sistêmica recomendada para o tratamento do casal diagnosticado com Tricomoníase?',
        alternativas: [
          'A) Metronidazol 2g VO dose única (ou 500mg de 12/12h por 7 dias)',
          'B) Fluconazol 150mg VO dose única',
          'C) Nistatina creme vaginal por 14 dias',
          'D) Doxiciclina 100mg de 12/12h por 10 dias',
        ],
        resposta_correta: 'A) Metronidazol 2g VO dose única (ou 500mg de 12/12h por 7 dias)',
        explicacao:
          'Nitroimidazólicos (Metronidazol ou Tinidazol) via oral são indispensáveis para tratar tanto a paciente quanto seus parceiros sexuais.',
        dificuldade: 'Interno',
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
  (app) => {
    // down migration
  },
)
