var fs = require('fs');
var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/data.json";
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object

exports.Login = function(req, res){
  try {
    res.render('Login', {title : 'Login'});
  } catch (e) {
    next(e)
  }
};

exports.Submit = function(req, res) {
  //console.log(req.body)
  if (jsonContent.users.hasOwnProperty(req.body.username)) {
  	if (req.body.password == jsonContent.users[req.body.username])
  	  res.redirect('/Home');
  }
  else {
  	res.redirect('/Login')
  }


}
