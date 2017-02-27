var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content from public
app.use(express.static(__dirname + "/public"));

//Body parser setup
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('method'))
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgersController.js');
app.use('/', routes);

//Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});


