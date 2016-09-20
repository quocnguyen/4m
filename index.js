'use strict'

const log = require('./lib/log')
const port = process.env.PORT || 6969
require('dotenv').config({silent: true})
require('./lib/server').listen(port)
log.info('application start succesfully on port %s', port)
