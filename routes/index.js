var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.render('book-list', { title: 'Express list', 'btnListActive': true });
});

router.get('/add', function(req, res, next) {
  res.render('add-book', { title: 'Express list', 'btnAddActive': true });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express list', 'btnAboutActive': true });
});

module.exports = router;
