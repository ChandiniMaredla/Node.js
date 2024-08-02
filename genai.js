const express=require('express');
const app=express();
const axios = require('axios');
app.use(express.json());
app.post('/',(req,res)=>{
   // let val=req.body.que;
    
    let data = JSON.stringify({
        "messages": [
          {
            "role": "system",
            "content": req.body.prompt
          },
          {
            "role": "user",
            "content": req.body.que
          }
    
        ],
        "max_tokens": 800,
        "temperature": 0.7,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0.95,
        "stop": null
      });
      console.log(req.body);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://genairoadshow.openai.azure.com/openai/deployments/ITGprasanna/chat/completions?api-version=2024-02-15-preview',
        headers: { 
          'Content-Type': 'application/json', 
          'api-key': 'a1496b2d2d57424ea1a9dd4989c94a3c'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        res.json(response.data.choices[0].message);
      })
      .catch((error) => {
        console.log(error);
      });

     
})



app.listen(5000,()=>{
    console.log("success");
})