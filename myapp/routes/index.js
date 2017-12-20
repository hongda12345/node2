var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myapp'
});

connection.connect();

connection.query('select * from app', function (error, results) {
    if (error){
        connection.end();
    }else{
        connection.render('index', { results: 'data' });
    }
});

connection.end();
// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.end();
});

module.exports = router;
