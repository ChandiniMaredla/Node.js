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

app.delete('/',(req,res)=>{
let name=req.query.name;
let sql="delete from Student where name=?";
let value=[name];
connection.query(sql,value,(err)=>{
   if(err) throw err
   console.log("deleted"); 
})
});

app.listen(4008,()=>{
    console.log("done");
})