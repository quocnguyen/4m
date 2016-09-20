
'use strict'

const test = require('tape')
const server = require('../lib/server')
const supertest = require('supertest')
const app = supertest(server)

test('should load homepage', loadHomepage)

function loadHomepage (t) {
  app
    .get('/')
    .end(function (err, res) {
      t.equal(err, null, 'err null')
      t.equal(res.statusCode, 200, 'statusCode 200')
      t.end()
    })
}
