var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/test.json";
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object
//jsonContent.adventures[1].name = "no";  //go to adventures[1].name = Testtingg
jsonfile.writeFileSync(__dirname + '/../data/TESTING.json', jsonContent); //write back the stuff we changed


exports.getAdventure = function(req, res){
  try {
    var name = req.params.name; //name from the route
    console.log(name);

    //runs the adventure pug file!!!
    res.render('adventure', {
      'adventureName': name
    }); //data is our json file with all the data!!!
  } catch (e) {
    next(e)
  }
};
