var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/test.json";
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object
//jsonContent.adventures[1].name = "no";  //go to adventures[1].name = Testtingg



exports.LoggedAdventure = function(req, res){
  try {
    //renders (jade file, title you want to give it)
    console.log(req);
    res.render('logged-adventure', {title : 'Logged Adventure'})

 } catch (e) {
    next(e)
  }
};


exports.Submit = function(req, res) {
  var nextIndex = jsonContent.adventures.length
  jsonContent.adventures[nextIndex] = { //adds it to next open spot in array
    "name": "test2",
    "image": "test2",
    "id": "Test2"
  }
  jsonfile.writeFileSync(__dirname + '/../data/test.json', jsonContent); //write back the stuff we changed

}
