
// https://www.npmjs.com/package/body-parser
var bodyParser = require('body-parser')
var express = require('express');
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'tiny_donations_db'
});
 
connection.connect();

app.get('/profile',function(req,res) {
  res.sendFile(__dirname + '/public/profile.html');
});

app.get('/profile.json', function(req, res){
	connection.query('SELECT * FROM users', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.post('/profile-insert', function(req, res){
	connection.query('INSERT INTO users (name,street,city,state,zip,days,hours,instructions) VALUES (?,?,?,?,?,?,?,?)', 
		[req.body.name,req.body.street,req.body.city,req.body.state,req.body.zip,req.body.days,req.body.hours,req.body.instructions]
		,function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json({
	  	message: 'success'
	  });
	});
});

// app.post('/profile-update-location/', function(req, res){
// 	connection.query('UPDATE users SET lat = (?) lng = (?)', [req.body.lat, req.body.lng],function (error, results, fields) {
	  	
// 	});
// });

app.post('/profile-update', function(req, res){
		connection.query('UPDATE users SET lat = (?), lng = (?)', [req.body.lat,req.body.lng],function (error, results, fields) {
		  
		
		});
	});


app.post('/profile-delete', function(req, res){
	connection.query('DELETE FROM users WHERE id = (?)', [req.body.id],function (error, results, fields) {
	  
	  res.redirect('/profile.html');
	
	});
});

// app.post('/profile-edit/:id', function(req, res){
// 	connection.query('UPDATE users SET name = (?) WHERE id = (?)', [req.body.name, req.params.id],function (error, results, fields) {
	  
// 	  res.redirect('/');
	
// 	});
// });

app.get('/locations',function(req,res) {
  res.sendFile(__dirname + '/public/locations.html');
});


app.get('*', function(req, res){
	res.redirect('/')
});

app.listen(3000, function(){
	console.log('listening on 3000');
});






