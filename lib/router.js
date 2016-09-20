
'use strict'

const path = require('path')
const Router = require('router')
const app = new Router()
const viewpath = path.resolve(__dirname, '..', 'views')
app.use(require('./mid/render')(viewpath))

module.exports = app

app.get('/', loadHomePage)
app.get('/login', loadLogin)
app.post('/login', onLogin, loadLogin)

app.get('/register', loadRegister)
app.post('/register', onRegister, loadRegister)

function loadHomePage (req, res) {
  res.render('home.html')
}

function loadLogin (req, res) {
  res.render('login.html')
}

function onLogin (req, res, next) {

}

function loadRegister (req, res) {
  res.render('register.html')
}

function onRegister (req, res, next) {

}
