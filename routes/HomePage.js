var express = require("express")
var app = express()
var fs = require('fs');
var data = require( '../data/data.json');
var globalUser;

exports.HomePage = function(req, res){
  try {
    var user = req.params.user;
    for(var i = 0; i<data.users.length; i++){
       console.log("wow");
       console.log(user + "!");
       if(data.users[i].id === user){
         
         res.render('homepage', {user: jsonContent.users[i]});
       }
    }
 } catch (e) {
    next(e)
  }


};

exports.Logging = function(req, res) {
  //console.log(req.body)
  for(var i = 0; i<jsonContent.users.length; i++){
      if(jsonContent.users[i].id === req.body.userID){
          jsonContent.users[i].adventures.push({"lat": req.body.lat, "lng": req.body.lng});
      }
  }
  res.redirect('/TravelLog');
}
