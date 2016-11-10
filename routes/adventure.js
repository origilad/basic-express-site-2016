var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/data.json";
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object
//jsonfile.writeFileSync(__dirname + '/../data/TESTING.json', jsonContent); //write back the stuff we changed


exports.getAdventure = function(req, res){
  try {
    var name = req.params.name; //name from the route
    var adventureIndex = -1;
    for(var i = 0; i < jsonContent.adventures.length; i++){
      if(jsonContent.adventures[i].name == name) {
        adventureIndex = i;
      }
    }
    //adventure does not exist yet
    if(adventureIndex == -1){
      res.send("Adventure does not exist yet");
    }
    console.log(jsonContent.adventures[adventureIndex].Times_Visited);

    //runs the adventure pug file!!!
    //assign adventureName to the name we receive in params
    
    res.render('adventure', {
      'adventureName': name,
      'adventureContent': jsonContent.adventures[adventureIndex]
    }); //data is our json file with all the data!!!
  } catch (e) {
    next(e)
  }
};
