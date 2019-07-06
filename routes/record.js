const express = require('express')
const router = express.Router()

// 新支出頁面
router.get('/record/new', (req, res) => {
  res.render('new')
})
// 檢查 新支出
router.post('/record/new', (req, res) => {
  res.render('new')
})

// 編輯頁面
router.get('/record/edit', (req, res) => {
  res.render('edit')
})

// 檢查 編輯
router.put('/record/edit', (req, res) => {
  res.render('edit')
})

// 刪除頁面
router.get('/record/delete', (req, res) => {
  res.render('edit')
})

module.exports = router