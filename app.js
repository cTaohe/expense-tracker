const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// 載入引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static page
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/record/new', (req, res) => {
  res.render('new')
})

app.get('/record/edit', (req, res) => {
  res.render('edit')
})

app.get('/record/delete', (req, res) => {
  res.render('edit')
})

app.get('/users/login', (req, res) => {
  res.render('login')
})

app.get('/users/register', (req, res) => {
  res.render('register')
})
// start and listen server
app.listen(port, () => {
  console.log(`The express is on http://localhost:${port}`)
})