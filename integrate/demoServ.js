var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
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


/////route for the dashboards
app.get('/', function(req, res) {
  res.sendFile('index2.html', { root: __dirname });
});
/////Namepace for DB1
var nsp1 = io.of('/sock1');
// require('events').EventEmitter.prototype._maxListeners = 6;

///// Call for Mysql
nsp1.on('connection', function(socket) {
          var sql = "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=1 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=2 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=3 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=4 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=5 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=6 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=7 GROUP BY Leak_TestStauts order by Leak_TestStauts asc;"+
                    "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=8 GROUP BY Leak_TestStauts order by Leak_TestStauts asc";
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
              a4=0;
              b4=results[3][0]['COUNT(dat_oil_intern_id)'];
              c4=results[3][1]['COUNT(dat_oil_intern_id)'];
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
              console.log(numbers8);      // numbers4.push(results[3][2]['COUNT(dat_oil_intern_id)']);

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
              console.log('1 connected');
              nsp1.emit("temp", objs);
            });//// End of mysql Connection

});/////namespace end for db1

/////Namepace for DB2
var nsp2 = io.of('/sock2');
nsp2.on('connection', function(socket) {
        console.log("2 DB Conn");
        socket.on('updateGraph2',function(r){
            console.log("fired the status");
            add_status(r);
        });
        socket.on("end", function(){
          socket.disconnect(0);
          connection.end();
          connection = mysql.createConnection({
              host: 'localhost',
              port: 3306,
              user: 'root',
              password: 'root',
              database: 'internhtc',
              multipleStatements: true
          });
        });
});/////namespace end for db2

var param=0;
var add_status = function (r) {
  if(r>0){
    param++;
  }
  var sql = "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ;"+
            "SELECT * FROM dat_oil_intern where MachineNumber=? ";
//////call for Mysql every tiime for dynamic DB
  connection.query(sql, [1,2,3,4,5,6,7,8], function(error, results, fields) {
      if (error) {
          throw error;
      }
      console.log(results);
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
       nsp2.emit("temp2", objs);
      });
      connection.on('error', function(err) {
               console.log(err);
               callback(false);
               return;
     });

};


var param= 1;
var r=0;
var y=0;
var t=[];
var resd=[];
var median=0;
var median1=0;
var median2=0;
/// nsp3 to be defined...
var nsp3 = io.of('/sock3');
///// Call for Mysql
nsp3.on('connection', function(socket) {
  var sql = "select o_LeakRate from dat_oil_intern where MachineNumber=1 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=2 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=3 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=4 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=5 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=6 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=7 group by o_LeakRate order by o_LeakRate asc;"+
          "select o_LeakRate from dat_oil_intern where MachineNumber=8 group by o_LeakRate order by o_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=1 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=2 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=3 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=4 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=5 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=6 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=7 group by W_LeakRate order by W_LeakRate asc;"+
          "select W_LeakRate from dat_oil_intern where MachineNumber=8 group by W_LeakRate order by W_LeakRate asc";
    connection.query(sql, function(error, results, fields) {
      if (error) {
        throw error;
        console.log("error");
      }
      for(var e=0;e<8;e++)
      {
      t=[];
      var max=results[e][results[e].length-1];
      var min=results[e][0];
      var count1=results[e].length;
      if(count1%2!=0)
      {
      r=(count1+1)/2;
      median = results[e][r];
      }
      else
      {
        r=(count1)/2;
        if(results[e][r]>=results[e][r+1])
        {
          median = results[e][r];
        }
        else
        {
          median = results[e][r+1];
          r++;
        }
      }
      var rr=[];
      for(var i=r;i<results[e].length;i++)
      {
      t.push(results[e][i]);
      }

      var len2=t.length;
      if(r%2!=0)
      {
      median1=results[e][(r+1)/2];
      }
      else
      {
      if (results[e][r/2]>=results[e][(r/2)+1])
      {
            median1=results[e][r/2];
      }
      else
      {
        median1=results[e][(r/2)+1];
      }
      }
      if((len2)%2!=0)
      {
      median2=t[(len2+1)/2];
      }
      else
      {
      if(t[(len2)/2]>=t[((len2)/2)+1])
      {
        median2=t[(len2)/2];
      }
      else
      {
        median2=t[((len2)/2)+1];
      }
      }

      resd.push(min);
      resd.push(median1);
      resd.push(median);
      resd.push(median2);
      resd.push(max);
      }
      for(var e=8;e<16;e++)
      {
      t=[];
      var max=results[e][results[e].length-1];
      var min=results[e][0];
      var count1=results[e].length;
      if(count1%2!=0)
      {
      r=(count1+1)/2;
      median = results[e][r];
      }
      else
      {
      r=(count1)/2;
      if(results[e][r]>=results[e][r+1])
      {
        median = results[e][r];
      }
      else
      {
        median = results[e][r+1];
        r++;
      }
      }
      var rr=[];
      for(var i=r;i<results[e].length;i++)
      {
      t.push(results[e][i]);
      }

      var len2=t.length;
      if(r%2!=0)
      {
      median1=results[e][(r+1)/2];
      }
      else
      {
      if (results[e][r/2]>=results[e][(r/2)+1])
      {
          median1=results[e][r/2];
      }
      else
      {
      median1=results[e][(r/2)+1];
      }
      }
      if((len2)%2!=0)
      {
      median2=t[(len2+1)/2];
      }
      else
      {
      if(t[(len2)/2]>=t[((len2)/2)+1])
      {
      median2=t[(len2)/2];
      }
      else
      {
      median2=t[((len2)/2)+1];
      }
      }

      resd.push(min);
      resd.push(median1);
      resd.push(median);
      resd.push(median2);
      resd.push(max);

      }
      var objs = [];
      var obj={
              "min1":resd[0],
              "median11":resd[1],
              "median1":resd[2],
              "median12":resd[3],
              "max1":resd[4],
              "min2":resd[5],
              "median21":resd[6],
              "median2":resd[7],
              "median22":resd[8],
              "max2":resd[9],
              "min3":resd[10],
              "median31":resd[11],
              "median3":resd[12],
              "median32":resd[13],
              "max3":resd[14],
              "min4":resd[15],
              "median41":resd[16],
              "median4":resd[17],
              "median42":resd[18],
              "max4":resd[19],
              "min5":resd[20],
              "median51":resd[21],
              "median5":resd[22],
              "median52":resd[23],
              "max5":resd[24],
              "min6":resd[25],
              "median61":resd[26],
              "median6":resd[27],
              "median62":resd[28],
              "max6":resd[29],
              "min7":resd[30],
              "median71":resd[31],
              "median7":resd[32],
              "median72":resd[33],
              "max7":resd[34],
              "min8":resd[35],
              "median81":resd[36],
              "median8":resd[37],
              "median82":resd[38],
              "max8":resd[39],
              "min11":resd[40],
                        "median111":resd[41],
                        "median211":resd[42],
                        "median112":resd[43],
                        "max11":resd[44],
                        "min12":resd[45],
                        "median121":resd[46],
                        "median212":resd[47],
                        "median122":resd[48],
                        "max12":resd[49],
                        "min13":resd[50],
                        "median131":resd[51],
                        "median13":resd[52],
                        "median132":resd[53],
                        "max13":resd[54],
                        "min14":resd[55],
                        "median141":resd[56],
                        "median14":resd[57],
                        "median142":resd[58],
                        "max14":resd[59],
                        "min15":resd[60],
                        "median151":resd[61],
                        "median15":resd[62],
                        "median152":resd[63],
                        "max15":resd[64],
                        "min16":resd[65],
                        "median161":resd[66],
                        "median16":resd[67],
                        "median162":resd[68],
                        "max16":resd[69],
                        "min17":resd[70],
                        "median171":resd[71],
                        "median17":resd[72],
                        "median172":resd[73],
                        "max17":resd[74],
                        "min18":resd[75],
                        "median181":resd[76],
                        "median18":resd[77],
                        "median182":resd[78],
                        "max18":resd[79],
            };
        var objs=JSON.stringify(obj);
        console.log('3 connected');
        console.log(objs);
        nsp3.emit("temp3", objs);
    });//// End of mysql Connection

});/////namespace end for db3

var nsp4 = io.of('/sock4');
nsp4.on('connection', function(socket) {
        console.log("4 DB Conn");
        socket.on('updateGraph4',function(rr){
            add_status2(rr);
        });
        socket.on("end", function(){
          socket.disconnect(0);
          connection.end();
          connection = mysql.createConnection({
              host: 'localhost',
              port: 3306,
              user: 'root',
              password: 'root',
              database: 'internhtc',
              multipleStatements: true
          });
        });
});/////namespace end for db4

var r=0;
var add_status2 = function (param) {
  if(param>0){
    r++;
  }
  console.log(r);
    var sql="select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(O_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc";
            connection.query(sql,[1,r,2,r,3,r,4,r,5,r,6,r,7,r,8,r],function(err, results,rows)
            {
    //  console.log(results);
      for(j=0;j<8;j++)
      {
      for(i=0;i<24;i++)
      {
        if(results[j][i]==null)
        {
          results[j].push({'A':i, 'B':0});
        }
      }
      }
      O1_leakage=[];
      O1_leakage.push(results[0][0].B)
      O1_leakage.push(results[0][1].B)
      O1_leakage.push(results[0][2].B)
      O1_leakage.push(results[0][3].B)
      O1_leakage.push(results[0][4].B)
      O1_leakage.push(results[0][5].B)
      O1_leakage.push(results[0][6].B)
      O1_leakage.push(results[0][7].B)
      O1_leakage.push(results[0][8].B)
      O1_leakage.push(results[0][9].B)
      O1_leakage.push(results[0][10].B)
      O1_leakage.push(results[0][11].B)
      O1_leakage.push(results[0][12].B)
      O1_leakage.push(results[0][13].B)
      O1_leakage.push(results[0][14].B)
      O1_leakage.push(results[0][15].B)
      O1_leakage.push(results[0][16].B)
      O1_leakage.push(results[0][17].B)
      O1_leakage.push(results[0][18].B)
      O1_leakage.push(results[0][19].B)
      O1_leakage.push(results[0][20].B)
      O1_leakage.push(results[0][21].B)
      O1_leakage.push(results[0][22].B)
      O1_leakage.push(results[0][23].B)


            O2_leakage=[];
            O2_leakage.push(results[1][0].B)
            O2_leakage.push(results[1][1].B)
            O2_leakage.push(results[1][2].B)
            O2_leakage.push(results[1][3].B)
            O2_leakage.push(results[1][4].B)
            O2_leakage.push(results[1][5].B)
            O2_leakage.push(results[1][6].B)
            O2_leakage.push(results[1][7].B)
            O2_leakage.push(results[1][8].B)
            O2_leakage.push(results[1][9].B)
            O2_leakage.push(results[1][10].B)
            O2_leakage.push(results[1][11].B)
            O2_leakage.push(results[1][12].B)
            O2_leakage.push(results[1][13].B)
            O2_leakage.push(results[1][14].B)
            O2_leakage.push(results[1][15].B)
            O2_leakage.push(results[1][16].B)
            O2_leakage.push(results[1][17].B)
            O2_leakage.push(results[1][18].B)
            O2_leakage.push(results[1][19].B)
            O2_leakage.push(results[1][20].B)
            O2_leakage.push(results[1][21].B)
            O2_leakage.push(results[1][22].B)
            O2_leakage.push(results[1][23].B);

            O3_leakage=[];
            O3_leakage.push(results[2][0].B)
            O3_leakage.push(results[2][1].B)
            O3_leakage.push(results[2][2].B)
            O3_leakage.push(results[2][3].B)
            O3_leakage.push(results[2][4].B)
            O3_leakage.push(results[2][5].B)
            O3_leakage.push(results[2][6].B)
            O3_leakage.push(results[2][7].B)
            O3_leakage.push(results[2][8].B)
            O3_leakage.push(results[2][9].B)
            O3_leakage.push(results[2][10].B)
            O3_leakage.push(results[2][11].B)
            O3_leakage.push(results[2][12].B)
            O3_leakage.push(results[2][13].B)
            O3_leakage.push(results[2][14].B)
            O3_leakage.push(results[2][15].B)
            O3_leakage.push(results[2][16].B)
            O3_leakage.push(results[2][17].B)
            O3_leakage.push(results[2][18].B)
            O3_leakage.push(results[2][19].B)
            O3_leakage.push(results[2][20].B)
            O3_leakage.push(results[2][21].B)
            O3_leakage.push(results[2][22].B)
            O3_leakage.push(results[2][23].B);
            O4_leakage=[];
            O4_leakage.push(results[3][0].B)
            O4_leakage.push(results[3][1].B)
            O4_leakage.push(results[3][2].B)
            O4_leakage.push(results[3][3].B)
            O4_leakage.push(results[3][4].B)
            O4_leakage.push(results[3][5].B)
            O4_leakage.push(results[3][6].B)
            O4_leakage.push(results[3][7].B)
            O4_leakage.push(results[3][8].B)
            O4_leakage.push(results[3][9].B)
            O4_leakage.push(results[3][10].B)
            O4_leakage.push(results[3][11].B)
            O4_leakage.push(results[3][12].B)
            O4_leakage.push(results[3][13].B)
            O4_leakage.push(results[3][14].B)
            O4_leakage.push(results[3][15].B)
            O4_leakage.push(results[3][16].B)
            O4_leakage.push(results[3][17].B)
            O4_leakage.push(results[3][18].B)
            O4_leakage.push(results[3][19].B)
            O4_leakage.push(results[3][20].B)
            O4_leakage.push(results[3][21].B)
            O4_leakage.push(results[3][22].B)
            O4_leakage.push(results[3][23].B);    //var day2=results[1][0];4
      //      var day4=results[3][param].A;

            O5_leakage=[];
            O5_leakage.push(results[4][0].B)
            O5_leakage.push(results[4][1].B)
            O5_leakage.push(results[4][2].B)
            O5_leakage.push(results[4][3].B)
            O5_leakage.push(results[4][4].B)
            O5_leakage.push(results[4][5].B)
            O5_leakage.push(results[4][6].B)
            O5_leakage.push(results[4][7].B)
            O5_leakage.push(results[4][8].B)
            O5_leakage.push(results[4][9].B)
            O5_leakage.push(results[4][10].B)
            O5_leakage.push(results[4][11].B)
            O5_leakage.push(results[4][12].B)
            O5_leakage.push(results[4][13].B)
            O5_leakage.push(results[4][14].B)
            O5_leakage.push(results[4][15].B)
            O5_leakage.push(results[4][16].B)
            O5_leakage.push(results[4][17].B)
            O5_leakage.push(results[4][18].B)
            O5_leakage.push(results[4][19].B)
            O5_leakage.push(results[4][20].B)
            O5_leakage.push(results[4][21].B)
            O5_leakage.push(results[4][22].B)
            O5_leakage.push(results[4][23].B);    //var day2=results[1][0];

        //    var day5=results[4][param];

            O6_leakage=[];
            O6_leakage.push(results[5][0].B)
            O6_leakage.push(results[5][1].B)
            O6_leakage.push(results[5][2].B)
            O6_leakage.push(results[5][3].B)
            O6_leakage.push(results[5][4].B)
            O6_leakage.push(results[5][5].B)
            O6_leakage.push(results[5][6].B)
            O6_leakage.push(results[5][7].B)
            O6_leakage.push(results[5][8].B)
            O6_leakage.push(results[5][9].B)
            O6_leakage.push(results[5][10].B)
            O6_leakage.push(results[5][11].B)
            O6_leakage.push(results[5][12].B)
            O6_leakage.push(results[5][13].B)
            O6_leakage.push(results[5][14].B)
            O6_leakage.push(results[5][15].B)
            O6_leakage.push(results[5][16].B)
            O6_leakage.push(results[5][17].B)
            O6_leakage.push(results[5][18].B)
            O6_leakage.push(results[5][19].B)
            O6_leakage.push(results[5][20].B)
            O6_leakage.push(results[5][21].B)
            O6_leakage.push(results[5][22].B)
            O6_leakage.push(results[5][23].B);    //var day2=results[1][0];

          //  var day6=results[5][param].A;

            O7_leakage=[];
            O7_leakage.push(results[6][0].B)
            O7_leakage.push(results[6][1].B)
            O7_leakage.push(results[6][2].B)
            O7_leakage.push(results[6][3].B)
            O7_leakage.push(results[6][4].B)
            O7_leakage.push(results[6][5].B)
            O7_leakage.push(results[6][6].B)
            O7_leakage.push(results[6][7].B)
            O7_leakage.push(results[6][8].B)
            O7_leakage.push(results[6][9].B)
            O7_leakage.push(results[6][10].B)
            O7_leakage.push(results[6][11].B)
            O7_leakage.push(results[6][12].B)
            O7_leakage.push(results[6][13].B)
            O7_leakage.push(results[6][14].B)
            O7_leakage.push(results[6][15].B)
            O7_leakage.push(results[6][16].B)
            O7_leakage.push(results[6][17].B)
            O7_leakage.push(results[6][18].B)
            O7_leakage.push(results[6][19].B)
            O7_leakage.push(results[6][20].B)
            O7_leakage.push(results[6][21].B)
            O7_leakage.push(results[6][22].B)
            O7_leakage.push(results[6][23].B);    //var day2=results[1][0];

            //var day7=results[6][param].A;

            O8_leakage= [];
            O8_leakage.push(results[7][0].B)
            O8_leakage.push(results[7][1].B)
            O8_leakage.push(results[7][2].B)
            O8_leakage.push(results[7][3].B)
            O8_leakage.push(results[7][4].B)
            O8_leakage.push(results[7][5].B)
            O8_leakage.push(results[7][6].B)
            O8_leakage.push(results[7][7].B)
            O8_leakage.push(results[7][8].B)
            O8_leakage.push(results[7][9].B)
            O8_leakage.push(results[7][10].B)
            O8_leakage.push(results[7][11].B)
            O8_leakage.push(results[7][12].B)
            O8_leakage.push(results[7][13].B)
            O8_leakage.push(results[7][14].B)
            O8_leakage.push(results[7][15].B)
            O8_leakage.push(results[7][16].B)
            O8_leakage.push(results[7][17].B)
            O8_leakage.push(results[7][18].B)
            O8_leakage.push(results[7][19].B)
            O8_leakage.push(results[7][20].B)
            O8_leakage.push(results[7][21].B)
            O8_leakage.push(results[7][22].B)
            O8_leakage.push(results[7][23].B);
                //var day2=results[1][0];

      var objs = []
      var obj={ "OL1": O1_leakage,
                "OL2": O2_leakage,
                "OL3": O3_leakage,
                "OL4": O4_leakage,
                "OL5": O5_leakage,
                "OL6": O6_leakage,
                "OL7": O7_leakage,
                "OL8": O8_leakage,};
      objs=JSON.stringify(obj);
      console.log(objs);
      nsp4.emit('temp4', objs);
      });
     connection.on('error', function(err) {
              console.log(err);
              callback(false);
              return;
    });

};// namespace4 ends

/////Namepace for DB5
var nsp5 = io.of('/sock5');
///// Call for Mysql
nsp5.on('connection', function(socket) {
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
              console.log('5 connected');
              nsp5.emit("temp5", objs);
            });//// End of mysql Connection

});/////namespace end for db5

/////Namepace for DB6
var nsp6 = io.of('/sock6');
///// Call for Mysql
nsp6.on('connection', function(socket) {
  var sql = "select o_LeakRate from dat_oil_intern where  W_ProgNo=8 and O_ProgNo=7 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where  W_ProgNo=24 and O_ProgNo=23 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where W_ProgNo=16 and O_ProgNo=15  group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where  W_ProgNo=26 and O_ProgNo=25  group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where  W_ProgNo=20 and O_ProgNo=19  group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where  W_ProgNo=30 and O_ProgNo=29 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where  W_ProgNo=2 and O_ProgNo=1 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where  W_ProgNo=4 and O_ProgNo=3 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where W_ProgNo=28 and O_ProgNo=27 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where W_ProgNo=14 and O_ProgNo=13 group by o_LeakRate order by o_LeakRate asc;"+
            "select o_LeakRate from dat_oil_intern where W_ProgNo=18 and O_ProgNo=17 group by o_LeakRate order by o_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where W_ProgNo=8 and O_ProgNo=7  group by o_LeakRate order by o_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where  W_ProgNo=24 and O_ProgNo=23 group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where  W_ProgNo=16 and O_ProgNo=15 group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where W_ProgNo=26 and O_ProgNo=25  group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where  W_ProgNo=20 and O_ProgNo=19  group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where  W_ProgNo=30 and O_ProgNo=29  group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where  W_ProgNo=2 and O_ProgNo=1 group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where  W_ProgNo=4 and O_ProgNo=3 group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where W_ProgNo=28 and O_ProgNo=27 group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where W_ProgNo=14 and O_ProgNo=13 group by w_LeakRate order by w_LeakRate asc;"+
            "select w_LeakRate from dat_oil_intern where W_ProgNo=18 and O_ProgNo=17  group by w_LeakRate order by w_LeakRate asc";
            connection.query(sql, function(error, results, fields) {
              if(error) {
                throw error;
              }
              for(var e=0;e<11;e++)
               {
                 if(e!=10)
                 {
                 t=[];
                 var max=results[e][results[e].length-1];
                 // console.log(max);
                 var min=results[e][0];
               var count1=results[e].length;
               if(count1%2!=0)
               {
                 r=(count1+1)/2;
                 median = results[e][r];
               }
               else
               {
                   r=(count1)/2;
                   if(results[e][r]>=results[e][r+1])
                   {
                     median = results[e][r];
                   }
                   else
                   {
                     median = results[e][r+1];
                     r++;
                   }
               }
               var rr=[];
               for(var i=r;i<results[e].length;i++)
               {
                 t.push(results[e][i]);
               }

               var len2=t.length;
               if(r%2!=0)
               {
                 median1=results[e][(r+1)/2];
               }
               else
               {
                 if (results[e][r/2]>=results[e][(r/2)+1])
                 {
                       median1=results[e][r/2];
                 }
                 else
                 {
                   median1=results[e][(r/2)+1];
                 }
               }
               if((len2)%2!=0)
               {
                 median2=t[(len2+1)/2];
               }
               else
               {
                 if(t[(len2)/2]>=t[((len2)/2)+1])
                 {
                   median2=t[(len2)/2];
                 }
                 else
                 {
                   median2=t[((len2)/2)+1];
                 }
               }
             }
             else
             {
               min1={};
               min1["o_LeakRate"]=0;
               median11={};
               median11["o_LeakRate"]=0;
               median1={};
               median1["o_LeakRate"]=0;
               median21={};
               median21["o_LeakRate"]=0;
               max1={};
               max1["o_LeakRate"]=0;
               resd.push(min1);
               resd.push(median11);
               resd.push(median1);
               resd.push(median21);
               resd.push(max1);
               break;
             }

               resd.push(min);
               resd.push(median1);
               resd.push(median);
               resd.push(median2);
               resd.push(max);
             }
             for(var e=11;e<22;e++)
             {
               if(e!=21)
          {
               t=[];
               var max=results[e][results[e].length-1];
               // console.log(max);
               var min=results[e][0];
             var count1=results[e].length;
             if(count1%2!=0)
             {
               r=(count1+1)/2;
               median = results[e][r];
             }
             else
             {
                 r=(count1)/2;
                 if(results[e][r]>=results[e][r+1])
                 {
                   median = results[e][r];
                 }
                 else
                 {
                   median = results[e][r+1];
                   r++;
                 }
             }
             var rr=[];
             for(var i=r;i<results[e].length;i++)
             {
               t.push(results[e][i]);
             }

             var len2=t.length;
             if(r%2!=0)
             {
               median1=results[e][(r+1)/2];
             }
             else
             {
               if (results[e][r/2]>=results[e][(r/2)+1])
               {
                     median1=results[e][r/2];
               }
               else
               {
                 median1=results[e][(r/2)+1];
               }
             }
             if((len2)%2!=0)
             {
               median2=t[(len2+1)/2];
             }
             else
             {
               if(t[(len2)/2]>=t[((len2)/2)+1])
               {
                 median2=t[(len2)/2];
               }
               else
               {
                 median2=t[((len2)/2)+1];
               }
             }
           }
           else
           {
               min={};
               min["w_LeakRate"]=0;
               median1={};
               median1["w_LeakRate"]=0;
               median={};
               median["w_LeakRate"]=0;
               median2={};
               median2["w_LeakRate"]=0;
               max={};
               max["w_LeakRate"]=0;
               resd.push(min);
               resd.push(median1);
               resd.push(median);
               resd.push(median2);
               resd.push(max);
                   break;
           }

             resd.push(min);
             resd.push(median1);
             resd.push(median);
             resd.push(median2);
             resd.push(max);
             // console.log(median);
             // console.log(median1);
             // console.log(median2);
             // console.log(max);
             // console.log(min);
           }
           // console.log(resd[101]);
           // for(var i=55;i<109;i++)
           // {
             // console.log(resd[23]);
           // }
               var objs = [];
               var obj={ "M111":resd[0],
                         "M112":resd[1],
                         "M113":resd[2],
                         "M114":resd[3],
                         "M115":resd[4],
                         "M121":resd[5],
                         "M122":resd[6],
                         "M123":resd[7],
                         "M124":resd[8],
                         "M125":resd[9],
                         "M131":resd[10],
                         "M132":resd[11],
                         "M133":resd[12],
                         "M134":resd[13],
                         "M135":resd[14],
                         "M141":resd[15],
                         "M142":resd[16],
                         "M143":resd[17],
                         "M144":resd[18],
                         "M145":resd[19],
                         "M151":resd[20],
                         "M152":resd[21],
                         "M153":resd[22],
                         "M154":resd[23],
                         "M155":resd[24],
                         "M161":resd[25],
                         "M162":resd[26],
                         "M163":resd[27],
                         "M164":resd[28],
                         "M165":resd[29],
                         "M171":resd[30],
                         "M172":resd[31],
                         "M173":resd[32],
                         "M174":resd[33],
                         "M175":resd[34],
                         "M181":resd[35],
                         "M182":resd[36],
                         "M183":resd[37],
                         "M184":resd[38],
                         "M185":resd[39],
                         "M191":resd[40],
                         "M192":resd[41],
                         "M193":resd[42],
                         "M194":resd[43],
                         "M195":resd[44],
                         "M1101":resd[45],
                         "M1102":resd[46],
                         "M1103":resd[47],
                         "M1104":resd[48],
                         "M1105":resd[49],
                         "M1111":resd[50],
                         "M1112":resd[51],
                         "M1113":resd[52],
                         "M1114":resd[53],
                         "M1115":resd[54],
                         "M211":resd[55],
                         "M212":resd[56],
                         "M213":resd[57],
                         "M214":resd[58],
                         "M215":resd[59],
                         "M221":resd[60],
                         "M222":resd[61],
                         "M223":resd[62],
                         "M224":resd[63],
                         "M225":resd[64],
                         "M231":resd[65],
                         "M232":resd[66],
                         "M233":resd[67],
                         "M234":resd[68],
                         "M235":resd[69],
                         "M241":resd[70],
                         "M242":resd[71],
                         "M243":resd[72],
                         "M244":resd[73],
                         "M245":resd[74],
                         "M251":resd[75],
                         "M252":resd[76],
                         "M253":resd[77],
                         "M254":resd[78],
                         "M255":resd[79],
                         "M261":resd[80],
                         "M262":resd[81],
                         "M263":resd[82],
                         "M264":resd[83],
                         "M265":resd[84],
                         "M271":resd[85],
                         "M272":resd[86],
                         "M273":resd[87],
                         "M274":resd[88],
                         "M275":resd[89],
                         "M281":resd[90],
                         "M282":resd[91],
                         "M283":resd[92],
                         "M284":resd[93],
                         "M285":resd[94],
                         "M291":resd[95],
                         "M292":resd[96],
                         "M293":resd[97],
                         "M294":resd[98],
                         "M295":resd[99],
                         "M2101":resd[100],
                         "M2102":resd[101],
                         "M2103":resd[102],
                         "M2104":resd[103],
                         "M2105":resd[104],
                         "M2111":resd[105],
                         "M2112":resd[106],
                         "M2113":resd[107],
                         "M2114":resd[108],
                         "M2115":resd[109],
                     };

              var objs=JSON.stringify(obj);
              console.log('6 connected');
              nsp6.emit("temp6", objs);
            });//// End of mysql Connection
});/////namespace end for db6

http.listen(3000, function() {
   console.log('listening on *:3000');
});
