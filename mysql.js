
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M1racle@123',
  database:'itgdb',
  port: 3306,  
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
let sql="insert into Student values(1,'chandini')";
connection.query(sql);
console.log("success");


  let sql1="insert into Student values(?,?)";
  let values=[2,'charishma'];
  connection.query(sql1,values);
    connection.end();
  //});
});
//,(err)=>{
  // if(err) throw err
  // console.log("insertion successful");