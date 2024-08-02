var express=require('express');
var app=express();
var mysql=require('mysql');
var cors=require('cors')
app.use(express.json());
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

app.post('/',(req,res)=>{
    let id=req.body.id;
    let name=req.body.name;
    let sql="insert into Student values(?,?)";
    let values=[id,name];
    connection.query(sql,values,(err)=>{
        if(err) throw err
        console.log("inserted");
    })

})

app.listen(4003,()=>{
    console.log("done");
})