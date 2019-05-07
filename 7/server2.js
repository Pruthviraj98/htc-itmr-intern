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
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'internhtc'
});

var io = require('socket.io')(server); //Bind socket.io to our express server.

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on('connection',function (dat) {
      connection.query('SELECT * FROM dat_oil_intern WHERE dat_oil_intern_id = ?', [param], function(error, results, fields) {
      var classes=results[0].Leak_TestStauts;
      var objs = [];
      objs.push({'classes':classes});
      JSON.stringify(objs);
      console.log(objs);
      io.sockets.emit('temp', objs);
    });
  //    socket.emit()
});
