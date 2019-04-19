var express = require('express')
var  http = require('http')
var  path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'password',
              database : 'tiny_donations_db'
            });
 
connection.connect();
 
global.db = connection;
var port = process.env.PORT || 3000
 
// all environments
app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'tiny donation',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only
 
app.get('/', function(req, res){
    var message = '';
  res.render('dashboard',{message: message});
 
});//call for main index page
app.get('/signup', function(req, res){
    var message = "";
      res.render('signup',{message: message} );
    
});//call for signup page
app.post('/signup', function(req, res){
    var post  = req.body;
      var username= post.user_name;
      var pass= post.password;
      var name= post.name;
      var sql = "INSERT INTO `users`(`name`,`user_name`, `password`) VALUES ('" + name + "','" + username + "','" + pass + "')";

      var query = db.query(sql, function(err, result) {
          if(err){
              console.log(err.message);
              res.render('signup', {message: err.message, level: 'danger'});
              return;
          }

         message = "Success! Your account has been created.Please sign in";
         res.render('login',{message: message, level: 'success'});
      });
    
    
});//call for signup post 
app.get('/login', function(req, res){
    var message = '';
    res.render('login',{message: message} );
});//call for login page
app.post('/login', function(req, res){
    
     var post  = req.body;
      var username= post.user_name;
      var pass= post.password;
     
      var sql="SELECT id, name, user_name FROM `users` WHERE `user_name`='"+username+"' and password = '"+pass+"'";                           
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/profile');
         }
         else{
            message = 'Wrong Credentials.Please try again';
            res.render('login',{message: message, level: 'danger'});
         }
                 
      });
});//call for login post

app.get('/logout',function(req, res){
    req.session.destroy(function(err) {
      res.redirect("/");
   })
} );//call for logout


app.get('/profile',function(req,res) {
  res.sendFile(__dirname + '/public/profile.html');
});
app.get('/img1',function(req, res){
    res.sendFile(__dirname + '/public/assets/images/image1.jpg');
    
})
app.get('/img2',function(req, res){
    res.sendFile(__dirname + '/public/assets/images/image2.jpg');
    
})
app.get('/img3',function(req, res){
    res.sendFile(__dirname + '/public/assets/images/image3.png');
    
})
app.get('/giveimg',function(req, res){
    res.sendFile(__dirname + '/public/assets/images/give.png');
    
})


app.get('/profile.json', function(req, res){
	connection.query('SELECT * FROM users', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});

});

app.get('/donationsaccepted.json', function(req, res){
  connection.query('SELECT * FROM donations_accepted', function (error, results, fields) {
    if (error) res.send(error)
    else res.json(results);
  });

});

// connection.query('SELECT * FROM donations_accepted', function (error, results, fields) {
//     if (error) res.send(error)
//     else res.json(results);
//   });

app.post('/profile-update', function(req, res){
    connection.query('UPDATE users SET user_group = (?), location_name = (?), street = (?), city = (?), state = (?), zip = (?), days = (?), hours = (?), instructions = (?)', 
          ['donation_center',req.body.location_name,req.body.street,req.body.city,req.body.state,req.body.zip,req.body.days,req.body.hours,req.body.instructions],function (error, results, fields) {
      
    });
  });



app.post('/profile-insert-accepted-donations', function(req, res){
  connection.query('INSERT INTO donations_accepted (donation_type, quantity ) VALUES (?,?)', 
    [req.body.donation_type,req.body.quantity],function (error, results, fields) {
  });
});

app.post('/profile-update-location', function(req, res){
    connection.query('UPDATE users SET lat = (?), lng = (?)', [req.body.lat,req.body.lng],function (error, results, fields) {
      
    
    });
  });


app.post('/profile-delete', function(req, res){
  connection.query('DELETE FROM users WHERE id = (?)', [req.body.id],function (error, results, fields) {
    
    res.redirect('/profile.html');
  
  });
});

app.get('/locations',function(req,res) {
  res.sendFile(__dirname + '/public/locations.html');
});


//app.get('*', function(req, res){
//	res.redirect('/dashboard')
//});

app.listen(port, function(){
	console.log('listening on '+port);
});






