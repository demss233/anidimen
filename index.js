let express = require("express");
let app = express();
let port = process.env.PORT | 8000;
let path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/particular.html"));
});

app.get("/genre/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/genre.html"));
});

app.get("/keyword/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/keyword.html"));
});

app.listen(port);
