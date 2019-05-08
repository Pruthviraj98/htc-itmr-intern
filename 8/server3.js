var express = require('express');
var app = express();
var server = app.listen(3000, () => { //Start the server, listening on port 4000.
    console.log("Listening to requests on port 3000...");
})
var session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


var mysql= require('mysql');
var path=require('path');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'internhtc'
});

var io = require('socket.io').listen(server);

app.get('/firstGraph', function(req, res){
    io.on('connection', function(dat){
      connection.query('SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern GROUP BY Leak_TestStauts', function(error, results, fields){
          console.log(results);
      });
    })
});

// app.get('/secondGraph', function(req, res){
//
// })

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

var param=20890;
io.on('connection',function (dat) {
      connection.query('SELECT * FROM dat_oil_intern WHERE dat_oil_intern_id = ?', [param], function(error, results, fields) {
      var classes=results[0].O_LeakRate;
      var labels=results[0].ID;
      // console.log(classes);
      param++;
      var objs = [];
      classif=[];
      lab=[];
      classif.push(classes);
      lab.push(labels);
      var obj={"class": classif, "labels": lab};
      var objs=JSON.stringify(obj);
      // console.log(objs);
      io.sockets.emit('temp', objs);
    });
  //    socket.emit()
});
