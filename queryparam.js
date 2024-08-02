var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    var id=req.query.id;
    var name=req.query.name;
//res.send(req.query);
res.json({Employee: req.query});
});

app.get('/:id/:name',(req,res)=>{
    res.send(req.params);
});
app.listen(3006,()=>{
    console.log("success");
});