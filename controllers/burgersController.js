var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var goodAzzBurger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burger");
});



router.get("/burgers", function(req, res) {
  // express callback response by calling goodAzzBurger.selectAllBurger
  goodAzzBurger.all(function(data) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
            var hbsObject = {burger : data}
            console.log(hbsObject)
            res.render('index', hbsObject);
	});
});
router.post("/burgers/create", function(req, res){
  goodAzzBurger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('devoured', devoured);

	goodAzzBurger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;
