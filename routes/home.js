const express = require('express')
const Record = require('../models/record.js')
const router = express.Router()

router.get('/', (req, res) => {
  // 定義分類
  const categoryArray = [
    
  ]

  // 列出支出
  Record.find((error, records) => {
    if (error) console.error(error)
    return res.render('index', {records: records})
  })
})
module.exports = router