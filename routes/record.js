const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')
const { check, validationResult } = require('express-validator')

// 新支出頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 檢查 新支出
router.post('/new', [
  check('name')
    .not().isEmpty().withMessage('名稱需要填寫才知道花在哪唷!'),
  check('date')
    .not().isEmpty().withMessage('請輸入日期!')
    .isISO8601().withMessage('要用西元年唷'),
  check('category')
    .not().isEmpty().withMessage('分類選擇好，錢才能花在刀口上!'),
  check('amount')
    .not().isEmpty().withMessage('沒有支出就沒有花費!')
    .isInt({ min: 1}).withMessage('請填寫金額!')
], (req, res) => {
  const errors = validationResult(req)
  console.log(errors.array());
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render({ errors: errors.array() })
  }
  // 新增支出物件
  const newRecord = new Record({
    name: req.body.name,
    date: req.body.date,
    category: req.body.category,
    amount: req.body.amount
  })
  // 儲存物件
  newRecord.save(error => {
    if (error) console.error(error)
    return res.redirect('/')
  })
})

// 編輯頁面
router.get('/:id/edit', (req, res) => {
  Record.findById(req.params.id, (error, record) => {
    if (error) console.error(error)
    return res.render('edit', { record: record })
  })
})

// 檢查 編輯
router.put('/:id',[
  check('name')
    .not().isEmpty().withMessage('名稱需要填寫才知道花在哪唷!'),
  check('date')
    .not().isEmpty().withMessage('請輸入日期!')
    .isISO8601().withMessage('要用西元年唷'),
  check('category')
    .not().isEmpty().withMessage('分類選擇好，錢才能花在刀口上!'),
  check('amount')
    .not().isEmpty().withMessage('沒有支出就沒有花費!')
    .matches('/\d/').withMessage('請填寫金額數字')
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).render({ errors: errors.array() })
  }

  Record.findOne({ _id: req.params.id }, (error, record) => {
    if (error) console.error(error)
    Object.assign(record, req.body)
    record.save(error => {
      if (error) console.error(error)
      return res.redirect(`/record/${req.params.id}`)
    })
  })
  res.render('edit')
})

// 刪除頁面
router.delete('/:id/delete', (req, res) => {
  Record.findOne({ _id:req.params.id }, (error, record) => {
    if (error) console.error(error)
    record.remove(error => {
      if (error) console.error(error)
      return res.redirect('/')
    })
  })
})

module.exports = router