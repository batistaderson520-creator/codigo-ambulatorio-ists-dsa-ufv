migrate(
  (app) => {
    const collection = new Collection({
      name: 'questions',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'ist', type: 'text', required: true },
        { name: 'pergunta', type: 'text', required: true },
        { name: 'alternativas', type: 'json', required: true },
        { name: 'resposta_correta', type: 'text', required: true },
        { name: 'explicacao', type: 'text', required: true },
        {
          name: 'dificuldade',
          type: 'select',
          required: false,
          values: ['Calouro', 'Interno', 'Residente'],
          maxSelect: 1,
        },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_questions_ist ON questions (ist)'],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('questions')
    app.delete(collection)
  },
)
