var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


var mysql= require('mysql');
var path=require('path');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'internhtc',
    // multipleStatements: true
});

//instead of this info we send mysql info
// var clickCount = 0;

//redirect / to our index.html file
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on('connection', function(client) {
    client.on('clicked1', function(data) {
      connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=1 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
          if (error) {
              throw error;
            }
          console.log(results);
          numbers1=[];
          a1=results[0]['COUNT(dat_oil_intern_id)'];
          b1=results[1]['COUNT(dat_oil_intern_id)'];
          c1=results[2]['COUNT(dat_oil_intern_id)'];
          x1=100*(a1/(a1+b1+c1));
          y1=100*(b1/(a1+b1+c1));
          z1=100*(c1/(a1+b1+c1));
          numbers1.push(x1);
          numbers1.push(y1);
          numbers1.push(z1);
          // console.log(numbers1);
          var objs = [];
          var obj={"zerOneTwo1": numbers1};
          var objs=JSON.stringify(obj);
          // console.log(objs);
          io.emit('buttonUpdate', numbers1);
        });
      });

      client.on('clicked2', function(data) {
        connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=2 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
            if (error) {
                throw error;
              }
            console.log(results);
            numbers1=[];
            a1=results[0]['COUNT(dat_oil_intern_id)'];
            b1=results[1]['COUNT(dat_oil_intern_id)'];
            c1=results[2]['COUNT(dat_oil_intern_id)'];
            x1=100*(a1/(a1+b1+c1));
            y1=100*(b1/(a1+b1+c1));
            z1=100*(c1/(a1+b1+c1));
            numbers1.push(x1);
            numbers1.push(y1);
            numbers1.push(z1);
            console.log(numbers1);
            // console.log(numbers1);
            var objs = [];
            var obj={"zerOneTwo1": numbers1};
            var objs=JSON.stringify(obj);
            // console.log(objs);
            io.emit('buttonUpdate', numbers1);
          });
        });

        client.on('clicked3', function(data) {
          connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=3 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
              if (error) {
                  throw error;
                }
              console.log(results);
              numbers1=[];
              a1=results[0]['COUNT(dat_oil_intern_id)'];
              b1=results[1]['COUNT(dat_oil_intern_id)'];
              c1=results[2]['COUNT(dat_oil_intern_id)'];
              x1=100*(a1/(a1+b1+c1));
              y1=100*(b1/(a1+b1+c1));
              z1=100*(c1/(a1+b1+c1));
              numbers1.push(x1);
              numbers1.push(y1);
              numbers1.push(z1);
              console.log(numbers1);
              // console.log(numbers1);
              var objs = [];
              var obj={"zerOneTwo1": numbers1};
              var objs=JSON.stringify(obj);
              // console.log(objs);
              io.emit('buttonUpdate', numbers1);
            });
          });

          client.on('clicked4', function(data) {
            connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=4 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
                if (error) {
                    throw error;
                }
                console.log(results);
                numbers1=[];
                a1=0;
                b1=results[0]['COUNT(dat_oil_intern_id)'];
                c1=results[1]['COUNT(dat_oil_intern_id)'];
                x1=100*(a1/(a1+b1+c1));
                y1=100*(b1/(a1+b1+c1));
                z1=100*(c1/(a1+b1+c1));
                numbers1.push(x1);
                numbers1.push(y1);
                numbers1.push(z1);
                console.log(numbers1);
                // console.log(numbers1);
                var objs = [];
                var obj={"zerOneTwo1": numbers1};
                var objs=JSON.stringify(obj);
                // console.log(objs);
                io.emit('buttonUpdate', numbers1);
              });
            });

            client.on('clicked5', function(data) {
              connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=5 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
                  if (error) {
                      throw error;
                    }
                  console.log(results);
                  numbers1=[];
                  a1=results[0]['COUNT(dat_oil_intern_id)'];
                  b1=results[1]['COUNT(dat_oil_intern_id)'];
                  c1=results[2]['COUNT(dat_oil_intern_id)'];
                  x1=100*(a1/(a1+b1+c1));
                  y1=100*(b1/(a1+b1+c1));
                  z1=100*(c1/(a1+b1+c1));
                  numbers1.push(x1);
                  numbers1.push(y1);
                  numbers1.push(z1);
                  console.log(numbers1);
                  // console.log(numbers1);
                  var objs = [];
                  var obj={"zerOneTwo1": numbers1};
                  var objs=JSON.stringify(obj);
                  // console.log(objs);
                  io.emit('buttonUpdate', numbers1);
                });
              });

              client.on('clicked6', function(data) {
                connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=6 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
                    if (error) {
                        throw error;
                      }
                    console.log(results);
                    numbers1=[];
                    a1=results[0]['COUNT(dat_oil_intern_id)'];
                    b1=results[1]['COUNT(dat_oil_intern_id)'];
                    c1=results[2]['COUNT(dat_oil_intern_id)'];
                    x1=100*(a1/(a1+b1+c1));
                    y1=100*(b1/(a1+b1+c1));
                    z1=100*(c1/(a1+b1+c1));
                    numbers1.push(x1);
                    numbers1.push(y1);
                    numbers1.push(z1);
                    console.log(numbers1);
                    // console.log(numbers1);
                    var objs = [];
                    var obj={"zerOneTwo1": numbers1};
                    var objs=JSON.stringify(obj);
                    // console.log(objs);
                    io.emit('buttonUpdate', numbers1);
                  });
                });

                client.on('clicked7', function(data) {
                  connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=7 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
                      if (error) {
                          throw error;
                        }
                      console.log(results);
                      numbers1=[];
                      a1=results[0]['COUNT(dat_oil_intern_id)'];
                      b1=results[1]['COUNT(dat_oil_intern_id)'];
                      c1=results[2]['COUNT(dat_oil_intern_id)'];
                      x1=100*(a1/(a1+b1+c1));
                      y1=100*(b1/(a1+b1+c1));
                      z1=100*(c1/(a1+b1+c1));
                      numbers1.push(x1);
                      numbers1.push(y1);
                      numbers1.push(z1);
                      console.log(numbers1);
                      // console.log(numbers1);
                      var objs = [];
                      var obj={"zerOneTwo1": numbers1};
                      var objs=JSON.stringify(obj);
                      // console.log(objs);
                      io.emit('buttonUpdate', numbers1);
                    });
                  });

                  client.on('clicked8', function(data) {
                    connection.query( "SELECT COUNT(dat_oil_intern_id), Leak_TestStauts FROM dat_oil_intern where MachineNumber=8 GROUP BY Leak_TestStauts order by Leak_TestStauts asc",function(error, results, fields) {
                        if (error) {
                            throw error;
                          }
                        console.log(results);
                        numbers1=[];
                        a1=results[0]['COUNT(dat_oil_intern_id)'];
                        b1=results[1]['COUNT(dat_oil_intern_id)'];
                        c1=results[2]['COUNT(dat_oil_intern_id)'];
                        x1=100*(a1/(a1+b1+c1));
                        y1=100*(b1/(a1+b1+c1));
                        z1=100*(c1/(a1+b1+c1));
                        numbers1.push(x1);
                        numbers1.push(y1);
                        numbers1.push(z1);
                        console.log(numbers1);
                        // console.log(numbers1);
                        var objs = [];
                        var obj={"zerOneTwo1": numbers1};
                        var objs=JSON.stringify(obj);
                        // console.log(objs);
                        io.emit('buttonUpdate', numbers1);
                      });
                    });

                    client.on('clicked9', function(data) {
                      connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=1",function(error, results, fields) {
                          if (error) {
                              throw error;
                            }
                          console.log(results);
                          numbers1=[];
                          a1=results[0]['AVG(O_LeakRate)'];
                          b1=results[0]['AVG(W_LeakRate)'];
                          numbers1.push(a1);
                          numbers1.push(b1);
                          console.log(numbers1);
                          // console.log(numbers1);
                          var objs = [];
                          var obj={"zerOneTwo1": numbers1};
                          var objs=JSON.stringify(obj);
                          // console.log(objs);
                          io.emit('buttonUpdate2', numbers1);
                        });
                      });

                      client.on('clicked10', function(data) {
                        connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=2",function(error, results, fields) {
                            if (error) {
                                throw error;
                              }
                            console.log(results);
                            numbers1=[];
                            a1=results[0]['AVG(O_LeakRate)'];
                            b1=results[0]['AVG(W_LeakRate)'];
                            numbers1.push(a1);
                            numbers1.push(b1);
                            console.log(numbers1);
                            // console.log(numbers1);
                            var objs = [];
                            var obj={"zerOneTwo1": numbers1};
                            var objs=JSON.stringify(obj);
                            // console.log(objs);
                            io.emit('buttonUpdate2', numbers1);
                          });
                        });

                        client.on('clicked11', function(data) {
                          connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=3",function(error, results, fields) {
                              if (error) {
                                  throw error;
                                }
                              console.log(results);
                              numbers1=[];
                              a1=results[0]['AVG(O_LeakRate)'];
                              b1=results[0]['AVG(W_LeakRate)'];
                              numbers1.push(a1);
                              numbers1.push(b1);
                              console.log(numbers1);
                              // console.log(numbers1);
                              var objs = [];
                              var obj={"zerOneTwo1": numbers1};
                              var objs=JSON.stringify(obj);
                              // console.log(objs);
                              io.emit('buttonUpdate2', numbers1);
                            });
                      });

                          client.on('clicked12', function(data) {
                            connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=4",function(error, results, fields) {
                                if (error) {
                                    throw error;
                                  }
                                console.log(results);
                                numbers1=[];
                                a1=results[0]['AVG(O_LeakRate)'];
                                b1=results[0]['AVG(W_LeakRate)'];
                                numbers1.push(a1);
                                numbers1.push(b1);
                                console.log(numbers1);
                                // console.log(numbers1);
                                var objs = [];
                                var obj={"zerOneTwo1": numbers1};
                                var objs=JSON.stringify(obj);
                                // console.log(objs);
                                io.emit('buttonUpdate2', numbers1);
                              });
                            });

                            client.on('clicked13', function(data) {
                              connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=5",function(error, results, fields) {
                                  if (error) {
                                      throw error;
                                    }
                                  console.log(results);
                                  numbers1=[];
                                  a1=results[0]['AVG(O_LeakRate)'];
                                  b1=results[0]['AVG(W_LeakRate)'];
                                  numbers1.push(a1);
                                  numbers1.push(b1);
                                  console.log(numbers1);
                                  // console.log(numbers1);
                                  var objs = [];
                                  var obj={"zerOneTwo1": numbers1};
                                  var objs=JSON.stringify(obj);
                                  // console.log(objs);
                                  io.emit('buttonUpdate2', numbers1);
                                });
                              });

                              client.on('clicked14', function(data) {
                                connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=6",function(error, results, fields) {
                                    if (error) {
                                        throw error;
                                      }
                                    console.log(results);
                                    numbers1=[];
                                    a1=results[0]['AVG(O_LeakRate)'];
                                    b1=results[0]['AVG(W_LeakRate)'];
                                    numbers1.push(a1);
                                    numbers1.push(b1);
                                    console.log(numbers1);
                                    // console.log(numbers1);
                                    var objs = [];
                                    var obj={"zerOneTwo1": numbers1};
                                    var objs=JSON.stringify(obj);
                                    // console.log(objs);
                                    io.emit('buttonUpdate2', numbers1);
                                  });
                                });

                                client.on('clicked15', function(data) {
                                  connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=7",function(error, results, fields) {
                                      if (error) {
                                          throw error;
                                        }
                                      console.log(results);
                                      numbers1=[];
                                      a1=results[0]['AVG(O_LeakRate)'];
                                      b1=results[0]['AVG(W_LeakRate)'];
                                      numbers1.push(a1);
                                      numbers1.push(b1);
                                      console.log(numbers1);
                                      // console.log(numbers1);
                                      var objs = [];
                                      var obj={"zerOneTwo1": numbers1};
                                      var objs=JSON.stringify(obj);
                                      // console.log(objs);
                                      io.emit('buttonUpdate2', numbers1);
                                    });
                                  });

                                  client.on('clicked16', function(data) {
                                    connection.query( "SELECT AVG(O_LeakRate), AVG(W_LeakRate) FROM dat_oil_intern where MachineNumber=8",function(error, results, fields) {
                                        if (error) {
                                            throw error;
                                          }
                                        console.log(results);
                                        numbers1=[];
                                        a1=results[0]['AVG(O_LeakRate)'];
                                        b1=results[0]['AVG(W_LeakRate)'];
                                        numbers1.push(a1);
                                        numbers1.push(b1);
                                        console.log(numbers1);
                                        // console.log(numbers1);
                                        var objs = [];
                                        var obj={"zerOneTwo1": numbers1};
                                        var objs=JSON.stringify(obj);
                                        // console.log(objs);
                                        io.emit('buttonUpdate2', numbers1);
                                      });
                                    });
                                    var param =1;
                                    client.on('auto', function(data) {
                                      connection.query( "SELECT * FROM dat_oil_intern",function(error, results, fields) {
                                          if (error) {
                                              throw error;
                                            }
                                            console.log(results);
                                          // var O1_leakage=results[0][param].O_LeakRate;
                                          var W1_leakage=results[param].W_LeakRate;
                                          var mach=results[param].MachineNumber;
                                          param++;

                                          WL=[];
                                          WL.push(W1_leakage);
                                          m=[];
                                          m.push(mach)
                                          var objs = [];
                                          var obj={ "WL": WL, "mach": m};
                                          var objs=JSON.stringify(obj);
                                          io.emit('autoUpdate', objs);
                                        });
                                      });

});
//start our web server and socket.io server listening
server.listen(3000, function(){
  console.log('listening on *:3000');
});
