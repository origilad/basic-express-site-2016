var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/data.json";
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object

exports.LoggedAdventure = function(req, res){
  try {
    //renders (jade file, title you want to give it)

    var user = req.params.user;
    for(var i = 0; i<jsonContent.users.length; i++){
       console.log("wow");
       console.log(user + "!");
       if(jsonContent.users[i].id === user){

         res.render('logged-adventure', {title: 'Logged Adventure', user: jsonContent.users[i]});
       }
    }
 } catch (e) {
    next(e)
  }
};


exports.Submit = function(req, res) {
  console.log(req.body);
  req.body.image = "http://lorempixel.com/600/200/?random=" + Math.round(Math.random()*100); //generate random image to display
  jsonContent.adventures[jsonContent.adventures.length] = req.body; //go to next available spot
  jsonfile.writeFileSync(__dirname + '/../data/data.json', jsonContent);

  res.redirect('/adventure/'+req.body.name)
  //res.redirect('/Home');
}
