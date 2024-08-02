var express=require('express');
var app=express();
var port=3000;
var path=require('path');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    var user = req.body.user;
    var password = req.body.password;
res.send('username : '+user+ ' password : '+password);
});
app.get('/', (req, res) => {
    res.sendFile('form.html', { root: path.join(__dirname, 'public') });
});
app.listen(3000,function(){
console.log("running successfully");
});