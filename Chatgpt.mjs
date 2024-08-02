// import OpenAI from "openai";
// import dotenv from "dotenv";
// dotenv.config();
// import express from 'express'
// import axios from "axios";
// import {Configuration} from 'openai'
// // const express = require('express')
// //const axios = require('axios')
// const app = express()
// const port = process.env.PORT || 3000
// app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//     });
//     const openai = new OpenAI(configuration);
//     app.post('/api/chat', async (req, res) => {
//         const { message } = req.body
//           const completion = await openai.createCompletion({
//               model: "text-davinci-003",
//               prompt: message,
//               max_tokens:200
//             });
    
//          res.json({ response: completion.data.choices[0].text })})
//             app.listen(port, () => {
//                 console.log(`Server running at http://localhost:${port}`)
//               })
              
// import OpenAI, { Configuration } from "openai";
// import dotenv from "dotenv";
// import express from 'express';
// import axios from "axios";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAI(configuration);

// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;
//   try {
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: message,
//       max_tokens: 200,
//     });

//     res.json({ response: completion.data.choices[0].text });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while processing your request.");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import OpenAI from "openai";
import dotenv from "dotenv";
import express from 'express';
import axios from "axios";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 200,
    });

    res.json({ response: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
