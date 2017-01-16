var mongoose = require('mongoose');
var autoIncrement = require("mongodb-autoincrement");

var dbconnection = mongoose.connect("mongodb://localhost/test");
module.exports = dbconnection;
