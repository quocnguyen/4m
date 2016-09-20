
'use strict'

const consolidate = require('consolidate')
const path = require('path')
const log = require('../log')

// a middleware add render to res
module.exports = function renderMiddleware (viewpath) {
  return function (req, res, next) {
    res.render = function render (file, data) {
      file = path.resolve(viewpath, file)
      data = data || {}
      if (res.locals) Object.assign(data, res.locals)
      res.statusCode = res.statusCode || 200
      consolidate.mustache(file, data, function _html (err, html) {
        if (err) { return log.fatal(err) }
        res.setHeader('content-type', 'text/html; charset=urf-8')
        res.end(html)
      })
    }
    next()
  }
}
