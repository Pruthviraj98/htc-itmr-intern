var mysql = require('mysql');
var express = require('express');
var app =express();
var MachineName = [], O_LeakRate = [], W_LeakRate = [];
var jsonArray;
var path=require('path');
var connection = mysql.createConnection({
  host: 'localhost',
  port:3307,
  user: 'root',
  password: 'root',
  database: 'internhtc'
});
var queryString = 'SELECT * FROM dat_oil_intern';


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../projectX', 'sample.html'));
})
// Fetching data from database
app.get('/sample', function(req, res) {
  connection.query(queryString, function(err, rows, fields) {
    if(err) throw err;
    formatData(rows);
    res.send(jsonArray);
    console.log(jsonArray);
  });
});

function formatData(dataArray) {
  for(var i = 0; i < dataArray.length; i++) {
    MachineName[i] = dataArray[i].MachineName;
    O_LeakRate[i] = dataArray[i].O_LeakRate;
    W_LeakRate[i] = dataArray[i].W_LeakRate;
  }
  jsonArray = [MachineName, O_LeakRate, W_LeakRate];
  console.log("in FormatData()...\n");
  console.log(jsonArray);
}

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
