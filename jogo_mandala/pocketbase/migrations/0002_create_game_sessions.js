migrate(
  (app) => {
    const collection = new Collection({
      name: 'game_sessions',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        {
          name: 'user',
          type: 'relation',
          required: false,
          collectionId: '_pb_users_auth_',
          cascadeDelete: false,
          maxSelect: 1,
        },
        { name: 'score', type: 'number', required: true },
        { name: 'correct_count', type: 'number', required: true },
        { name: 'total_questions', type: 'number', required: true },
        { name: 'classification', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_game_sessions_score ON game_sessions (score DESC)'],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('game_sessions')
    app.delete(collection)
  },
)
