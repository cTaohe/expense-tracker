const express = require('express')
const Record = require('../models/record.js')
const router = express.Router()
const { authenticated } = require('../config/auth.js')
router.get('/',authenticated, (req, res) => {
  // 月份選單
  const monthsHash = {
    '1':'一月',
    '2':'二月',
    '3':'三月',
    '4':'四月',
    '5':'五月',
    '6':'六月',
    '7':'七月',
    '8':'八月',
    '9':'九月',
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
    category: {
      $regex: categorys, $options: "i"
    }
  }).exec((error, records) => {
    if (error) console.error(error)
    const hasStr = (target, str) => target.toString().includes(str)
    const record = records.filter(({date}) => {
      return [date.getMonth() + 1].some(str => hasStr(str, months))
    })
    let totalAmount = record.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    res.render('index', { records:record, monthsHash, categorysHash, totalAmount, months, categorys})
  })
})
module.exports = router