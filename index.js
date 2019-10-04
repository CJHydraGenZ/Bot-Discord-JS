// const path = require('path')
// console.log(__dirname)
// console.log(path.dirname(__filename))

// console.log(__filename)
// const cahyaa = require("./module");
// console.log("cahya");

// function panggil(angka, caraPem) {
//   for (let i = 0; i < angka; i++) {
//     caraPem(i);
//   }
// }

// panggil(10, console.log());

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", function(req, res) {
  //   res.send("Hello World");
  res.render("index");
});

app.get("/user/:id", function(req, res) {
  res.send(req.params.id);
});

app.listen(3000, function() {
  console.log("server berjalan");
});
