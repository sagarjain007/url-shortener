const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const app = express();
const port = 3000;

const { hash } = require("./utilities/helper");

app.use(bodyParser.json());



app.get("/ping", (req, res) => {
  res.status(200).json({ status: "I am working" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
