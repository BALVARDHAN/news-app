const express = require("express");
const cors = require("cors");
const app = express();

const corsOption = {
  origin : "https://news-app-kohl-omega.vercel.app",
  optionsSuccessStatus : 200
};

app.use(cors(corsOption));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
