var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.get('/location', function (req, res) {
	res.render('location');
});

router.get('/location', function (req, res) {
	res.render('location');
	res.redirect('/users/location');
});

var UserLocation = require('../models/location');

router.post('/location', (req, res) => {
	var username = req.user.username;
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;

	var newUserLocation = new UserLocation({
		username: username,
		latitude: latitude,
		longitude: longitude,
	});

	UserLocation.addLocation(newUserLocation, function (err, location) {
		if (err) throw err;
		console.log(location);
	});
	res.json('Successfully created');
});

module.exports = router;