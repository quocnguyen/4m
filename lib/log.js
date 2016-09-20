
'use strict'

const pino = require('pino')()
pino.level = process.env.LOG_LEVEL || 'info'
module.exports = pino
