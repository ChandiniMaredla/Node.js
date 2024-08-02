var express = require('express');
var app= express();
var mysql= require('mysql');
var cors=require('cors')
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'M1racle@123',
    database:'itgdb',
    port:'3306'
});

app.use(cors())
connection.connect((err)=>{
if(err) throw err
console.log("connected");
});


app.get('/project/:pid',(req,res)=>{
let pid=[req.params.pid];
let sql="select * from Project where pid=?";
connection.query(sql,pid, (err, result) => {
    if (err) throw err;
    else {
      res.json(result);
    }
  });
  console.log("success");
});

app.listen(3008, () => {
  console.log("done");
});

