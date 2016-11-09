var jsonfile = require('jsonfile'); //so we can easily write to json
jsonfile.spaces = 4; //so when we write to jsonfile it formats
var filepath = __dirname + "/../data/test.json"; //read this json file
jsonContent = jsonfile.readFileSync(filepath); //read file and put as json object



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

  //Accessing json object. Has a key called adventures that is an array.
  //Look at data/test.json for reference
  var nextIndex = jsonContent.adventures.length //get the first open slot in the array
  jsonContent.adventures[nextIndex] = { //adds it to next open spot in array
    "name": "test2",
    "image": "test2",
    "id": "Test2"
  }
  //write back the stuff we just changed
  jsonfile.writeFileSync(__dirname + '/../data/test.json', jsonContent);
}
