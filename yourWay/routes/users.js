var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var scripts = [{ script: '/public/js/location.js' }];
var User = require('../models/user');


// login
router.get('/location', function (req, res) {
	res.render('location');
});

router.get('/location', function (req, res) {
	console.log('ensayo');
	res.render('location');
	res.redirect('/users/location');
});




var UserLocation = require('../models/location');


router.post('/location', function (req, res) {
	var username = req.user.username;
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;

	//	console.log(req.user.username);

	var newUserLocation = new UserLocation({
		username: username,
		latitude: latitude,
		longitude: longitude,
	});

	UserLocation.addLocation(newUserLocation, function (err, location) {
		if (err) throw err;
		console.log(location);
	});
});



module.exports = router;