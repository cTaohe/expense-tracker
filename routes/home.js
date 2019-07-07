const express = require('express')
const Record = require('../models/record.js')
const router = express.Router()
const { authenticated } = require('../config/auth.js')
router.get('/',authenticated, (req, res) => {
  // 月份選單
  const monthsHash = {
    '01':'一月',
    '02':'二月',
    '03':'三月',
    '04':'四月',
    '05':'五月',
    '06':'六月',
    '07':'七月',
    '08':'八月',
    '09':'九月',
    '10':'十月',
    '11':'十一月',
    '12':'十二月'
  }
  // 分類選單
  const categorysHash = {
    'living': '家居物業',
    'traffic': '交通出行',
    'recreation': '休閒娛樂',
    'food': '餐飲食品',
    'other': '其他',
  }
  const months = req.query.months || ''
  const categorys = req.query.categorys || ''

  // 列出支出
  Record.find({ 
    userId: req.user._id,
    date: {
      $regex: new RegExp("2019-" + months, "i")
    },
    category: {
      $regex: categorys, $options: "i"
    }
  }).exec((error, records) => {
    if (error) console.error(error)
    let totalAmount = records.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    res.render('index', { records, monthsHash, categorysHash, totalAmount, months, categorys})
  })
})
module.exports = router