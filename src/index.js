var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/testAPI", function (req, res) {
  var a = { name: "Akash", typeOfperson: "very stupid", age: "10" };
  console.log(req.body);
  console.log("entered");
  res.send(JSON.stringify(a));
});

app.get("/", function (req, res) {
  res.send("hellow");
});

app.get("/home", function (req, res) {
  console.log("home reached");
  var ab = { name: "Rahul" };

  res.send(JSON.stringify(ab));
});
app.post("/login", function (req, res) {
  console.log("login reached");
  console.log(req.body);
  res.send("hellow");
});
app.post("/change", function (req, res) {
  console.log(req);
});

app.listen(3000, function () {
  console.log("server listning at port sucessfuly");
});
