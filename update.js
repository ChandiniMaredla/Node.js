var express = require('express');
var app= express();
var mysql= require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'M1racle@123',
    database:'itgdb',
    port:'3306'
});

connection.connect((err)=>{
if(err) throw err
console.log("connected");
});

app.put('/',(req,res)=>{
let name=req.query.name;
let id=req.query.id;
let sql="update Student set name=? where id=?";
let value=[name,id];
connection.query(sql,value,(err)=>{
   if(err) throw err
   console.log("deleted"); 
})
});

app.listen(4009,()=>{
    console.log("done");
})