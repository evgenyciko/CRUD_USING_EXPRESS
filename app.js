const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');
const route = express.Router();
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 9000;
const {
  getUsers,
  createUsers,
  readUsers,
  loginUsers,
  updateUsers,
  deleteUsers,
} = require("./users/users.service");
const { urlencoded } = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// home
app.get("/", (req, res) => {
res.render('index');
})

// suit game
app.get("/suit", (req, res) => {
res.render('suit');
})

// 
// app.get("/", (req, res) => {
//   return res.status(200).send("info mase");
// });

app.get("/users", getUsers);

app.post("/users", createUsers);

app.post("/login", loginUsers);

app.get("/users/:userId", readUsers);

app.put("/users/:userId", updateUsers);

app.delete("/users/:userId", deleteUsers);

app.listen(port, () =>
  console.log("server started and listen on port " + port)
);
