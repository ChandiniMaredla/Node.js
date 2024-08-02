const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const secretKey = 'MC';

app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
const token = req.headers['authorization'];
console.log(req.headers);
if (!token) {
return res.status(403).send('A token is required for authentication');
}

try {
const decoded = jwt.verify(token.split(' ')[1], secretKey);
console.log(token);
console.log(secretKey);
req.user = decoded;
} catch (err) {
console.error('Invalid Token:', err.message);
return res.status(401).send('Invalid Token');
}
return next();
};

app.post('/name', (req, res) => {
const { firstname, lastname } = req.body;

if (!firstname || !lastname) {
return res.status(400).send('Please provide both firstname and lastname.');
}

const token = jwt.sign({ firstname, lastname }, secretKey, { expiresIn: '1h' });

res.json({
message: `Hello, ${firstname} ${lastname}!`,
token: token
});
});

app.get('/protected', verifyToken, (req, res) => {
res.json({
message: 'This is a protected route',
user: req.user
});
});



app.listen(2000, () => {
console.log("This program running on port 2000");
});