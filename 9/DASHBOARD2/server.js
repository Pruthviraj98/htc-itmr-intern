var express = require('express');
var app = express();
var server = app.listen(3000, () => { //Start the server, listening on port 4000.
    console.log("Listening to requests on port 3000...");
})

var mysql= require('mysql');
var path=require('path');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'internhtc',
    multipleStatements: true
});

var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});
var param= 1;
io.on('connection',function (dat) {
  var sql = "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=1 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=2 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=3 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=4 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=5 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=6 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=7 GROUP BY Leak_TestStauts;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=8 GROUP BY Leak_TestStauts";
  connection.query(sql, function(error, results, fields) {
      if (error) {
          throw error;
        }
      console.log(results);
      numbers1=[]
      numbers1.push(results[0][0]['COUNT(dat_oil_intern_id)']);
      numbers1.push(results[0][1]['COUNT(dat_oil_intern_id)']);
      numbers1.push(results[0][2]['COUNT(dat_oil_intern_id)']);
      console.log(numbers1);

      numbers2=[]
      numbers2.push(results[1][0]['COUNT(dat_oil_intern_id)']);
      numbers2.push(results[1][1]['COUNT(dat_oil_intern_id)']);
      numbers2.push(results[1][2]['COUNT(dat_oil_intern_id)']);
      console.log(numbers2);

      numbers3=[]
      numbers3.push(results[2][0]['COUNT(dat_oil_intern_id)']);
      numbers3.push(results[2][1]['COUNT(dat_oil_intern_id)']);
      numbers3.push(results[2][2]['COUNT(dat_oil_intern_id)']);
      console.log(numbers3);


      numbers4=[]
      numbers4.push(results[3][0]['COUNT(dat_oil_intern_id)']);
      numbers4.push(results[3][1]['COUNT(dat_oil_intern_id)']);
      // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);
      numbers4.push(0);

      numbers5=[]
      numbers5.push(results[4][0]['COUNT(dat_oil_intern_id)']);
      numbers5.push(results[4][1]['COUNT(dat_oil_intern_id)']);
      numbers5.push(results[4][2]['COUNT(dat_oil_intern_id)']);

      numbers6=[]
      numbers6.push(results[5][0]['COUNT(dat_oil_intern_id)']);
      numbers6.push(results[5][1]['COUNT(dat_oil_intern_id)']);
      numbers6.push(results[5][2]['COUNT(dat_oil_intern_id)']);

      numbers7=[]
      numbers7.push(results[6][0]['COUNT(dat_oil_intern_id)']);
      numbers7.push(results[6][1]['COUNT(dat_oil_intern_id)']);
      numbers7.push(results[6][2]['COUNT(dat_oil_intern_id)']);

      numbers8=[]
      numbers8.push(results[7][0]['COUNT(dat_oil_intern_id)']);
      numbers8.push(results[7][1]['COUNT(dat_oil_intern_id)']);
      numbers8.push(results[7][2]['COUNT(dat_oil_intern_id)']);

      var objs = [];
      var obj={ "zerOneTwo1": numbers1,
                "zerOneTwo2": numbers2,
                "zerOneTwo3": numbers3,
                "zerOneTwo4": numbers4,
                "zerOneTwo5": numbers5,
                "zerOneTwo6": numbers6,
                "zerOneTwo7": numbers7,
                "zerOneTwo8": numbers8,
              };
      var objs=JSON.stringify(obj);
      console.log(objs);
      io.sockets.emit('temp', objs);
    });
  //    socket.emit()
});
