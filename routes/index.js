var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {


    res.render('index', {title: 'Leaderboard| iOS'});
});
router.get('/react', function (req, res, next) {
    res.render('second', {title: 'Leaderboard| RN'});
});


module.exports = router;
