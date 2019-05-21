var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/db1', function(req, res) {
   res.sendfile('index.html');
});

// app.get('/db2', function(req, res) {
//    res.sendfile('index2.html');
// });

var nsp1 = io.of('/sock1');
nsp1.on('connection', function(socket) {
   console.log('1 connected');
   nsp1.emit("temp", 'Hello every1!');
});

var nsp2 = io.of('/sock2');
nsp2.on('connection', function(socket) {
   console.log('2 connected');
   nsp2.emit("temp", 'Hello 2 everyone!');
});

// app.get('/sock1', function(req, res){
//     io.on('connection', function(socket) {
//        console.log('A user 1 connected');
//        var obj=['hi', 'hello', 'db1'];
//        socket.emit('temp', obj);
//
//        socket.on('disconnect', function () {
//           console.log('A user 1 disconnected');
//        });
//     });
// });
//
// app.get('/sock2', function(req, res){
//     io.on('connection', function(socket) {
//        console.log('A user 2 connected');
//        var obj=['hi', 'hello', 'db1'];
//        socket.emit('temp', obj);
//
//        socket.on('disconnect', function () {
//           console.log('A user 2 disconnected');
//        });
//     });
// });


http.listen(3000, function() {
   console.log('listening on *:3000');
});
