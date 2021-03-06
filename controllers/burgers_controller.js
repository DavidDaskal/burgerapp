//Routing happens here


var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burgers : data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/add', function(req,res) {
	
	burger.add(['burger_name'], [req.body.burgername], function(data){
		res.redirect('/burgers');
	});
});

router.put('/burgers/devoured/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : true}, condition, function(data){
		res.redirect('/burgers');
	});
});



module.exports = router;
