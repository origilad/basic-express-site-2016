var express = require("express")
var app = express()
var fs = require('fs');
var data = require( '../data/data.json');


exports.HomePage = function(req, res){
  try {
    //renders (jade file, title you want to give it)
    var marks = [];
    marks[0] = data.markers[0];
    marks[1] = data.markers[1];
    marks[2] = data.markers[2];
    res.render('homepage');


 } catch (e) {
    next(e)
  }


};

exports.Logging = function(req, res) {
  //console.log(req.body)
  for(var i = 0; i<jsonContent.users.length; i++){
      if(jsonContent.users[i].id === req.body.user.id){
          jsonContent.users[i].adventures.push({"lat": req.body.lat, "lng": req.body.lng});
      }
  }
  res.redirect('/TravelLog');
}
