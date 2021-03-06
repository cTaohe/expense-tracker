const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const exphbsHelper = require('./handlebars-helpers.js')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// 設定 db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/record', { useNewUrlParser: true, useCreateIndex: true  })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error')
})
db.once('open', () => {
  console.log('mongoose connected')
})

// 設定 session
app.use(session({
  secret: 'record',
  resave: 'false',
  saveUninitialized: 'false'
}))

// passport
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport.js')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated
  next()
})

// 設定 flash
app.use(flash())
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

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
app.use('/', require('./routes/home.js'))
app.use('/record', require('./routes/record.js'))
app.use('/users', require('./routes/user.js'))
app.use('/auth', require('./routes/auth.js'))

// start and listen server
app.listen(process.env.PORT || port, () => {
  console.log('App is running')
})