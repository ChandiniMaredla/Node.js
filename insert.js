var express=require('express');
var app=express();
var mysql=require('mysql');
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

app.get('/',(req,res)=>{
    let id=parseInt(req.query.id);
    let name=req.query.name;
    let sql="insert into Student values(?,?)";
    let values=[id,name];
    connection.query(sql,values,((err)=>{
if(err) throw err
        console.log("inserted");
    }));
});

app.listen(4002,()=>{
    console.log("success");
})
//connection.end();
