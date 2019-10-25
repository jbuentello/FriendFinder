//Set up dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Express configuration
var app = express();
var PORT = process.env.PORT || 8080;

//Directory for CSS files
app.use(express.static(__dirname + "/app/public"));

//Middleware for parsing JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Routes for API and HTML
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
	console.log("Application is listening on PORT: " + PORT);
});

