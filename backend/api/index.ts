const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/fetch", (req, res) => {
  const url =
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=346fc7b36bfc4d5ea9b38eebf510ba9a";
  fetch(url)
    .then((response) => response.json())
    .then((data) => res.send(JSON.stringify(data)));
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
