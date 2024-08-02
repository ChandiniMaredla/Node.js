var express=require('express');
var bodyparser=require('body-parser');
var app=express();
app.get('/',function(req,res){
res.send("Hello World!");
});
app.post('/',function(req,res)
{
res.send("hello world");
});
app.put('/',function(req,res)
{
res.send("hello world");
});
app.delete('/',function(req,res)
{
res.send("hello world");
});



app.listen(4001,function(){
console.log(`it is working on ${3000} port`);
});
