const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/", express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.listen(PORT, _ => {
  console.log(`Application listening at http://127.0.0.1:${PORT}`);
});