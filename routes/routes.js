/*	This contains the links to all the routes.
	Cam see what files are linked to the different pages
*/
module.exports = function(app) {


app.use('/AdventureAnalytics', require('./advAna'));
app.use('/TravelLog', require('./travelLog'));




};
