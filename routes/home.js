const express = require('express')
const Record = require('../models/record.js')
const router = express.Router()
const { authenticated } = require('../config/auth.js')
router.get('/',authenticated, (req, res) => {
  // 定義分類

  // 列出支出
  Record.find({ userId: req.user._id }, (error, records) => {
    if (error) console.error(error)
    return res.render('index', {records: records})
  })
})
module.exports = router