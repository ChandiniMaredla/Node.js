var express=require('express');
var app=express();
var employee=[
    {
        "id":100,"name":"chandini"
    },
    {
        "id":101,
        "name":"cherry"
    },
    {
        "id":103,
        "name":"harsha"
    }
    ]
app.delete('/del',(req,res)=>{
let val=parseInt(req.query.id);
let eid= employee.find(e => e.id===val);
let newarray= employee.filter( emp => emp.id !== val);
res.json(newarray);
})

app.listen(4000,()=>{
    console.log("success");
})