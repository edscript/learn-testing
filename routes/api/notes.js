const router = require('express').Router()

const database = require('../../database/db')

router.get('/', (req, res) => {
  res.status(201).json(database)
})

router.post('/', (req, res) => {
  // TODO: Create code to insert
  const note = {
    id: '5',
    text: 'Test'
  }

  database.push(note)

  return res.status(201).json('Note added!')
})

module.exports = router
