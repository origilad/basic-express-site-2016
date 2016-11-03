var express = require('express'),
		router = express.Router(),
		template = require('jade').compileFile( __dirname + '/../source/templates/homepage.jade');


// This is where the actual content for the page goes
router.get('/', function(req,res){
	try {
    res.send("Travel Log");
  } catch (e) {
    next(e)
  }
});

module.exports = router;
