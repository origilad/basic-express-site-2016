var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/data.json";
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object
//jsonfile.writeFileSync(__dirname + '/../data/TESTING.json', jsonContent); //write back the stuff we changed


exports.getAdventure = function(req, res){
  try {
    var name = req.params.name; //name from the route
    console.log(name);
    var user = req.params.user;
    for(var i = 0; i<jsonContent.users.length; i++){
       console.log("wow");
       console.log(user + "!");
       if(jsonContent.users[i].id === user){

         res.render('adventure', {adventureName: name, user: jsonContent.users[i]});
       }
    }

    //runs the adventure pug file!!!
    //assign adventureName to the name we receive in params
  } catch (e) {
    next(e)
  }
};
