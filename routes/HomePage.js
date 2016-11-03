exports.HomePage = function(req, res){
  try {
    //renders (jade file, title you want to give it)

    res.render('homepage', {title : 'HomePage'})
  } catch (e) {
    next(e)
  }
};
