// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

	// Home page
	app.use('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};