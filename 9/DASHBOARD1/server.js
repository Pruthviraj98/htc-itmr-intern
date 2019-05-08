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
  var sql = "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ";
  connection.query(sql, [1,2,3,4,5,6,7,8], function(error, results, fields) {
      if (error) {
          throw error;
      }
      //taking the leakage rates from machine 1 to machine 8 from the mysql multiple instruction executtion
      var O1_leakage=results[0][param].O_LeakRate;
      var W1_leakage=results[0][param].W_LeakRate;
      var day1=results[0][param].Leak_CreatedDate;

      var O2_leakage=results[1][param].O_LeakRate;
      var W2_leakage=results[1][param].W_LeakRate;
      var day2=results[1][param].Leak_CreatedDate;

      var O3_leakage=results[2][param].O_LeakRate;
      var W3_leakage=results[2][param].W_LeakRate;
      var day3=results[2][param].Leak_CreatedDate;

      var O4_leakage=results[3][param].O_LeakRate;
      var W4_leakage=results[3][param].W_LeakRate;
      var day4=results[3][param].Leak_CreatedDate;

      var O5_leakage=results[4][param].O_LeakRate;
      var W5_leakage=results[4][param].W_LeakRate;
      var day5=results[4][param].Leak_CreatedDate;

      var O6_leakage=results[5][param].O_LeakRate;
      var W6_leakage=results[5][param].W_LeakRate;
      var day6=results[5][param].Leak_CreatedDate;

      var O7_leakage=results[6][param].O_LeakRate;
      var W7_leakage=results[6][param].W_LeakRate;
      var day7=results[6][param].Leak_CreatedDate;

      var O8_leakage=results[7][param].O_LeakRate;
      var W8_leakage=results[7][param].W_LeakRate;
      var day8=results[7][param].Leak_CreatedDate;

      //counter increase for the dynamic fetch
      param++;
      OL1=[];
      OL1.push(O1_leakage);
      WL1=[];
      WL1.push(W1_leakage);
      d1=[];
      d1.push(day1)

      OL2=[];
      OL2.push(O2_leakage);
      WL2=[];
      WL2.push(W2_leakage);
      d2=[];
      d2.push(day2)

      OL3=[];
      OL3.push(O3_leakage);
      WL3=[];
      WL3.push(W3_leakage);
      d3=[];
      d3.push(day3)

      OL4=[];
      OL4.push(O4_leakage);
      WL4=[];
      WL4.push(W4_leakage);
      d4=[];
      d4.push(day4)

      OL5=[];
      OL5.push(O5_leakage);
      WL5=[];
      WL5.push(W5_leakage);
      d5=[];
      d5.push(day5)

      OL6=[];
      OL6.push(O6_leakage);
      WL6=[];
      WL6.push(W6_leakage);
      d6=[];
      d6.push(day6)

      OL7=[];
      OL7.push(O7_leakage);
      WL7=[];
      WL7.push(W7_leakage)
      d7=[];
      d7.push(day7)

      OL8=[];
      OL8.push(O8_leakage);
      WL8=[];
      WL8.push(W8_leakage);
      d8=[];
      d8.push(day8)



      var objs = [];
      var obj={ "OL1": OL1, "WL1": WL1,
                "OL2": OL2, "WL2": WL2,
                "OL3": OL3, "WL3": WL3,
                "OL4": OL4, "WL4": WL4,
                "OL5": OL5, "WL5": WL5,
                "OL6": OL6, "WL6": WL6,
                "OL7": OL7, "WL7": WL7,
                "OL8": OL8, "WL8": WL8,
                "day1": d1,
                "day2": d2,
                "day3": d3,
                "day4": d4,
                "day5": d5,
                "day6": d6,
                "day7": d7,
                "day8": d8,
              };
      var objs=JSON.stringify(obj);
      console.log(objs);
      io.sockets.emit('temp', objs);
    });
  //    socket.emit()
});
