var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Call the next middleware function
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    var user=req.body.user;
    var passwd=req.body.passwd;
    res.send('username: '+user+' password: '+passwd);
});
app.listen(3000,()=>{
    console.log("hiii");
})