var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "M1racle@123",
  database: "itgdb",
  port: "3306",
});

app.use(cors());
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.get("/", (req, res) => {
  let sql = "select * from Employee";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.json(result);
    }
  });
  console.log("success");
});

app.listen(3007, () => {
  console.log("done");
});
