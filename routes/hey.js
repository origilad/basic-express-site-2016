var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
	console.log("hi");
	res.render('Adventure Analytics', {title: 'Adventure Analytics'});
});

module.exports = router;
