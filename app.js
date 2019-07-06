const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

// 設定 bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

// 載入引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 設定 method-override
app.use(methodOverride('_method'))

// setting static page
app.use(express.static('public'))

// routes
app.use('/', require('./routes/home'))
app.use('/record', require('./routes/record'))
app.use('/users', require('./routes/user'))

// start and listen server
app.listen(port, () => {
  console.log(`The express is on http://localhost:${port}`)
})