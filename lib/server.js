
'use strict'

const http = require('http')
const server = module.exports = http.createServer()

server.on('request', function onRequest (req, res) {
  res.end('hi')
})
