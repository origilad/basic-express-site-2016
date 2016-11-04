
exports.LoginPage = function(req, res){
  try {
    res.render('LoginPage', {title : 'LoginPage'})
  } catch (e) {
    next(e)
  }
};
