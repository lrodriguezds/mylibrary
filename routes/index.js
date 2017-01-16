var express = require('express');
var router = express.Router();
var fs = require('fs');
var dbconnection = require('../config/dbconnection');

var bookSchema = {
	title: String,
	description: String
}
var Book = dbconnection.model("Book", bookSchema);

//HOME PAGE
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

//LIST
router.get('/list', function(req, res, next) {
	
	Book.find(function(err, books) {
		console.log(books);
		
		res.render('book-list', { title: 'Express list', 'btnListActive': true, books: books });

	});
		
});

//ADD BOOK
router.get('/add', function(req, res, next) {
	res.render('add-book', { title: 'Express list', 'btnAddActive': true });
});
router.post('/add', function(req, res, next) {
  
	console.log(req.body);

	var data = {
		title: req.body.title,
		description: req.body.description
	}

	var book = new Book(data);
	book.save(function(err) {
		console.log(book);
	});

	res.render('add-book', { title: 'Express list', 'btnAddActive': true });
});
router.get('/book/:id', function(req, res, next) {

	console.log(req.params.id);

	res.redirect('/list');
});

//ABOUT
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'Express list', 'btnAboutActive': true });
});

router.get('/test', function(req, res, next) {

	var file;
	console.log("hola");
	file = fs.readFile("/etc/hosts", "utf8", function(error, file) {
		console.log("archivo");
		if (error) {
			return console.log(error);
		} else {
			return file;
		}

	});

	console.log("ya!" + file);
	
	res.render('about', { title: 'Express list', 'btnAboutActive': true });
});

module.exports = router;
