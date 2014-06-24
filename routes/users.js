var express = require('express');
var router = express.Router();
var config = require('../config');
var mysql = require('mysql');
var connect = mysql.createConnection(config.mysql);

/* GET users listing. */
router.get('/', function(req, res){
	  sql='SELECT * FROM customer';
	  connect.query(sql, function(e, rows, f) {
	    if (!e) {
	      res.render('users', {
	        data: rows
	      });
	    }else{
	    	console.log('Database Error');
	    }
	  });
});

router.get('/new', function(req, res){
	  res.render('add',{title:'tambah data'});
});

router.post('/new', function(req, res) {
	  var name = req.param('name');
	  var address = req.param('alamat');
	  sql='INSERT INTO customer(name,address) VALUES("'+name+'","'+address+'")';
	  //do query
	  connect.query(sql, function(e, rows, f) {
	    if (!e) {
	      res.redirect('/users')
	    }
	  });
	});

module.exports = router;
