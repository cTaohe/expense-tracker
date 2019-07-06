const mongoose = require('mongoose')
const User = require('../user.js')
const users = require('../../users.json').users
const Record = require('../record.js')
const record = require('../../record.json').records

mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true})
const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})
db.once('open', () => {
  console.log('db connected')
  // 創造使用者
  users.forEach((user, index) => {
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password
    })
    newUser.save(user => {
      for (let i = index; i > (index + 1); i++){
        Record.create({
          name: record[i].name,
          date: record[i].date,
          category:record[i].category,
          amount: record[i].category,
          userId: user._id
        })
      }
    }).catch(error => {
      console.log(error)
    })
  })
  console.log(done)
})