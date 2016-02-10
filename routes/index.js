var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chad Ostler' });
});

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('index', { header1: 'About Me' });
});

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('index', { header4: 'Projects' });
});

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('index', { header3: 'Services' });
});

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('index', { header5: 'Contact Me' });
});

module.exports = router;
