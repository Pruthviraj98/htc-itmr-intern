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
  var sql = "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=8 and O_ProgNo=7 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=24 and O_ProgNo=23 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=16 and O_ProgNo=15 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=26 and O_ProgNo=25 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=20 and O_ProgNo=19 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=30 and O_ProgNo=29 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=2 and O_ProgNo=1 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=4 and O_ProgNo=3 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
            "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=28 and O_ProgNo=27 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=14 and O_ProgNo=13 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
             "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where W_ProgNo=18 and O_ProgNo=17 GROUP BY Leak_TestStauts order by Leak_TestStauts asc";
  connection.query(sql, function(error, results, fields) {
      if (error) {
          throw error;
        }
      console.log(results);
      numbers1=[];
      a1=results[0][0]['COUNT(dat_oil_intern_id)'];
      b1=results[0][1]['COUNT(dat_oil_intern_id)'];
      c1=results[0][2]['COUNT(dat_oil_intern_id)'];
      x1=100*(a1/(a1+b1+c1));
      y1=100*(b1/(a1+b1+c1));
      z1=100*(c1/(a1+b1+c1));
      numbers1.push(y1);
      numbers1.push(x1);
      numbers1.push(z1);
      console.log(numbers1);

      numbers2=[]
      a2=results[1][0]['COUNT(dat_oil_intern_id)'];
      b2=results[1][1]['COUNT(dat_oil_intern_id)'];
      c2=results[1][2]['COUNT(dat_oil_intern_id)'];
      x2=100*(a2/(a2+b2+c2));
      y2=100*(b2/(a2+b2+c2));
      z2=100*(c2/(a2+b2+c2));
      numbers2.push(y2);
      numbers2.push(x2);
      numbers2.push(z2);
      console.log(numbers2);

      numbers3=[]
      a3=results[2][0]['COUNT(dat_oil_intern_id)'];
      b3=results[2][1]['COUNT(dat_oil_intern_id)'];
      c3=results[2][2]['COUNT(dat_oil_intern_id)'];
      x3=100*(a3/(a3+b3+c3));
      y3=100*(b3/(a3+b3+c3));
      z3=100*(c3/(a3+b3+c3));
      numbers3.push(y3);
      numbers3.push(x3);
      numbers3.push(z3);
      console.log(numbers3);



      numbers4=[]
      a4=results[3][0]['COUNT(dat_oil_intern_id)']
      b4=results[3][1]['COUNT(dat_oil_intern_id)'];
      c4=results[3][2]['COUNT(dat_oil_intern_id)'];
      x4=100*(a4/(a4+b4+c4));
      y4=100*(b4/(a4+b4+c4));
      z4=100*(c4/(a4+b4+c4));
      numbers4.push(y4);
      numbers4.push(x4);
      numbers4.push(z4);
      console.log(numbers4);      // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);

      numbers5=[]
      a5=results[4][0]['COUNT(dat_oil_intern_id)'];
      b5=results[4][1]['COUNT(dat_oil_intern_id)'];
      c5=results[4][2]['COUNT(dat_oil_intern_id)'];
      x5=100*(a5/(a5+b5+c5));
      y5=100*(b5/(a5+b5+c5));
      z5=100*(c5/(a5+b5+c5));
      numbers5.push(y5);
      numbers5.push(x5);
      numbers5.push(z5);
      console.log(numbers5);      // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);

      numbers6=[]
      a6=results[5][0]['COUNT(dat_oil_intern_id)'];
      b6=results[5][1]['COUNT(dat_oil_intern_id)'];
      c6=results[5][2]['COUNT(dat_oil_intern_id)'];
      x6=100*(a6/(a6+b6+c6));
      y6=100*(b6/(a6+b4+c6));
      z6=100*(c6/(a6+b4+c6));
      numbers6.push(y6);
      numbers6.push(x6);
      numbers6.push(z6);
      console.log(numbers6);      // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);

      numbers7=[]
      a7=results[6][0]['COUNT(dat_oil_intern_id)'];
      b7=results[6][1]['COUNT(dat_oil_intern_id)'];
      c7=results[6][2]['COUNT(dat_oil_intern_id)'];
      x7=100*(a7/(a7+b7+c7));
      y7=100*(b7/(a7+b7+c7));
      z7=100*(c7/(a7+b7+c7));
      numbers7.push(y7);
      numbers7.push(x7);
      numbers7.push(z7);
      console.log(numbers7);      // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);

      numbers8=[]
      a8=results[7][0]['COUNT(dat_oil_intern_id)'];
      b8=results[7][1]['COUNT(dat_oil_intern_id)'];
      c8=results[7][2]['COUNT(dat_oil_intern_id)'];
      x8=100*(a8/(a8+b8+c8));
      y8=100*(b8/(a8+b8+c8));
      z8=100*(c8/(a8+b8+c8));
      numbers8.push(y8);
      numbers8.push(x8);
      numbers8.push(z8);
      console.log(numbers8);

      numbers9=[]
      a9=results[8][0]['COUNT(dat_oil_intern_id)'];
      b9=results[8][1]['COUNT(dat_oil_intern_id)'];
      c9=results[8][2]['COUNT(dat_oil_intern_id)'];
      x9=100*(a9/(a9+b9+c9));
      y9=100*(b9/(a9+b9+c9));
      z9=100*(c9/(a9+b9+c9));
      numbers9.push(y9);
      numbers9.push(x9);
      numbers9.push(z9);
      console.log(numbers9);

      numbers10=[]
      a10=results[9][0]['COUNT(dat_oil_intern_id)'];
      b10=results[9][1]['COUNT(dat_oil_intern_id)'];
      c10=results[9][2]['COUNT(dat_oil_intern_id)'];
      x10=100*(a10/(a10+b10+c10));
      y10=100*(b10/(a10+b10+c10));
      z10=100*(c10/(a10+b10+c10));
      numbers10.push(y10);
      numbers10.push(x10);
      numbers10.push(z10);
      console.log(numbers10);   // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);

      numbers11=[]
      a11=results[10][0]['COUNT(dat_oil_intern_id)'];
      b11=0;
      c11=0;
      x11=100*(a11/(a11+b11+c11));
      y11=100*(b11/(a11+b11+c11));
      z11=100*(c11/(a11+b11+c11));
      numbers11.push(y11);
      numbers11.push(x11);
      numbers11.push(z11);
      console.log(numbers11);
      var objs = [];
      var obj={ "zerOneTwo1": numbers1,
                "zerOneTwo2": numbers2,
                "zerOneTwo3": numbers3,
                "zerOneTwo4": numbers4,
                "zerOneTwo5": numbers5,
                "zerOneTwo6": numbers6,
                "zerOneTwo7": numbers7,
                "zerOneTwo8": numbers8,
                "zerOneTwo9": numbers9,
                "zerOneTwo10": numbers10,
                "zerOneTwo11": numbers11,
              };
      var objs=JSON.stringify(obj);
      console.log(objs);
      io.sockets.emit('temp', objs);
    });
  //    socket.emit()
});
