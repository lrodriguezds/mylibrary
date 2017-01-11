var express = require('express');
var router = express.Router();

//HOME PAGE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//LIST
router.get('/list', function(req, res, next) {
  res.render('book-list', { title: 'Express list', 'btnListActive': true });
});

//ADD BOOK
router.get('/add', function(req, res, next) {
  res.render('add-book', { title: 'Express list', 'btnAddActive': true });
});
router.post('/add', function(req, res, next) {
  
  console.log(req.body);

  res.render('add-book', { title: 'Express list', 'btnAddActive': true });
});

//ABOUT
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express list', 'btnAboutActive': true });
});

module.exports = router;
