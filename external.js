const express=require('express');
const app=express();
const axios = require('axios');
let data = JSON.stringify({
  "eId": 22,
  "eName": "Harsha",
  "eDepart": "ITG",
  "eSal": 50000
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://172.17.12.147:8000/emp',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
