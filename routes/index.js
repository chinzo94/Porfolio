/* 
    Page: index.js
    Author: Chad Ostler
    Description: routes for index view and passes value of title
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

module.exports = router;
