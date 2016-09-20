
'use strict'

const http = require('http')
const server = http.createServer()
const app = require('./router')
const finalhandler = require('finalhandler')

server.on('request', function onRequest (req, res) {
  app(req, res, finalhandler(req, res))
})

module.exports = server
