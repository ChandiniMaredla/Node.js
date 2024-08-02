const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
app.use(express.json());
const secret='MC';
app.post('/token',(req,res)=>{
    let firstname=req.body.firstname;
    let lastname=req.body.lastname;
    const token = jwt.sign({ firstname, lastname }, secret, { expiresIn: '1h' });
    res.send(token);
});

app.listen(3000,()=>{
    console.log("working");
})