const express = require('express')

const app = express()

app.use(require('morgan')('dev'))

app.use(express.json())

app.use(require('./routes'))

module.exports = app
