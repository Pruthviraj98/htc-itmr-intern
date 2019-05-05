const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql= require('mysql');
var session = require('express-session');
var path=require('path');


var connection = mysql.createConnection({
    host: 'localhost',
    port:3307,
    user: 'root',
    password: 'root',
    database: 'internhtc'
});

var app = express();
app.locals.moment = require('moment');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
var engines = require('consolidate');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile('sample.html' , { root : __dirname});
});
app.get('/sample', function(request, response){

  connection.query("SELECT * from dat_oil_intern", function(err, results, fields){
  console.log(results);
  request.session.MachineName=results[0].MachineName;
  request.session.W_ProgNo=results[0].W_ProgNo;
  request.session.O_ProgNo=results[0].O_ProgNo;
  request.session.O_LeakRate=results[0].O_LeakRate;
  request.session.W_LeakRate=results[0].W_LeakRate;
  request.session.Machine=results[0].Machine;
  request.session.MachineNumber=results[0].MachineNumber;

  response.render("sample.html", {

    MachineName:request.session.MachineName,
    W_ProgNo:request.session.W_ProgNo,
    O_ProgNo:request.session.O_ProgNo,
    O_LeakRate:request.session.O_LeakRate,
    W_LeakRate:request.session.W_LeakRate,
    Machine:request.session.Machine,
    MachineNumber:request.session.MachineNumber
  });
  });
});

// app.use(cors({origin: '*'}));
// app.use(bodyParser);
// let x = true;
//
// const server = app.listen(3000,() => {
//     console.log('Started in 3000');
// });
//
// const io = socket(server);
//
// io.sockets.on('connection', (socket) => {
//     console.log(`new connection id: ${socket.id}`);
//     sendData(socket);
// })
//
// function sendData(socket){
//
//     if(x){
//         socket.emit('data1', Array.from({length: 8}, () => Math.floor(Math.random() * 590)+ 10));
//         x = !x;
//     }else{
//         socket.emit('data2', Array.from({length: 8}, () => Math.floor(Math.random() * 590)+ 10));
//         x = !x;
//     }
//     console.log(`data is ${x}`);
//     setTimeout(() => {
//         sendData(socket);
//     }, 10000);
// }
app.listen(3000);
console.log("Server is listening at port 3000");
