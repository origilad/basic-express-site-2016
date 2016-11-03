var data = require( '../data/test.json');

exports.TravelLog = function(req, res){
  try {
    res.render('TravelLog', {title : 'TravelLog'});
    console.log(data);
  } catch (e) {
    next(e)
  }
};
