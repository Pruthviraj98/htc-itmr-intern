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

var io = require('socket.io')(server); //Bind socket.io to our express server.

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

var param=1;
io.on('connection',function (dat) {
      connection.query('SELECT * FROM dat_oil_intern WHERE dat_oil_intern_id = ?', [param], function(error, results, fields) {
      var classes=results[0].Leak_TestStauts;
      param++;
      // console.log(param);
      var objs = [];
      // console.log(classes);
      classif=[];
      classif.push(classes);
      var obj={class: classif};
      // objs.push({'classes':classes});
      // JSON.stringify(objs);
      var objs=JSON.stringify(obj);
      console.log(objs);
      io.sockets.emit('temp', objs);
    });
  //    socket.emit()
});
