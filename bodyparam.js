var express=require('express');
var app=express();
app.use(express.json());

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
app.get('/',(req,res)=>{
    console.log(req.query.id);
    let val=parseInt(req.query.id);
    console.log(val);
    let foundEmployee = employee.find(e => e.id === val);
    
    if (foundEmployee) {
        res.send(foundEmployee.name);
    }
    else{
        res.send("error");
    }
    console.log(req.query);
});

app.post('/',(req,res)=>{
var id=req.body.id;
var name=req.body.name;
res.json({Student:req.body});
});
app.listen(3001,()=>{
    console.log("success");
})