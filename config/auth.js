module.exports = {
  authenticated: (req, res, next) => {
    if (req.isAuthenticated()){
      return next()
    }
    // req.flash('warning_Msg', '請先登入')
    res.redirect('users/login')
  }
}