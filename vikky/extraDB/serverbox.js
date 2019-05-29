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
  // console.log("conn established");
  connection.query(sql, function(error, results, fields) {
      // console.log(results[11].length);
      if (error) {
          throw error;
          console.log("error");
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
      console.log(objs);
      io.sockets.emit('temp', objs);
    })
  //    socket.emit()
});
