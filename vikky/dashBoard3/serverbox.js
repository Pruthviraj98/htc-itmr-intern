var express = require('express');
var app = express();
var server = app.listen(3000,() =>
{
  console.log("Listening to requests on port 3000...");
})
var mysql= require('mysql');
var path=require('path');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'internhtc',
    multipleStatements: true
});
var io = require('socket.io').listen(server);
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "box2.html"));
});
var param= 1;
var r=0;
var y=0;
var t=[];
var resd=[];
var median=0;
var median1=0;
var median2=0;
console.log("conn establishing");
io.on('connection',function (socket) {
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
  // console.log("conn established");
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
      // // console.log(median);
      // // console.log(median1);
      // // console.log(median2);
      // console.log(max);
      // console.log(min);
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
    // // console.log(median);
    // // console.log(median1);
    // // console.log(median2);
    // console.log(max);
    // console.log(min);
  }
      var objs = [];
      var obj={ "min1":resd[0],
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
      console.log(objs);
      io.sockets.emit('temp', objs);
    })
  //    socket.emit()
});
