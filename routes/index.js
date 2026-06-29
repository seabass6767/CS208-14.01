var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Downtown Donuts' });
});

/* Menu page */
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Menu | Downtown Donuts' });
});

/* About page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About | Downtown Donuts' });
});

/* Comments page - database part will be added later */
router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Comments | Downtown Donuts' });
});

module.exports = router;