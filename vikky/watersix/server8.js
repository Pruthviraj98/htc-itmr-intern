var app       =     require("express")();
var mysql     =     require("mysql");
var http      =     require('http').Server(app);
var io        =     require("socket.io")(http);
/* Creating POOL MySQL connection.*/
var pool    =   mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'internhtc',
    multipleStatements: true
});

app.get("/",function(req,res){
    res.sendFile(__dirname + '/str2.html');
});

/*  This is auto initiated event when Client connects to Your Machien.  */

io.on('connection',function(socket){
    console.log("A user is connected");
    socket.on('update Graph',function(r){
      add_status(r);
    });
});

var add_status = function (r) {
  var connection =  mysql.createConnection({
      host: 'localhost',
      port: 3307,
      user: 'root',
      password: 'root',
      database: 'internhtc',
      multipleStatements: true
  });
  console.log(r);
    var sql="select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc;"+
            "select hour(Leak_CreatedDate) as A,avg(W_LeakRate) as B from dat_oil_intern where machinenumber=? and day(Leak_CreatedDate)=? group by hour(Leak_CreatedDate) order by hour(Leak_CreatedDate) asc";
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
      console.log(obj);
      objs=JSON.stringify(obj);
      console.log(objs);
      io.sockets.emit('temp', objs);
      });
     connection.on('error', function(err) {
              callback(false);
              return;
    });
}

http.listen(3001,function(){
    console.log("Listening on 3001");
});
