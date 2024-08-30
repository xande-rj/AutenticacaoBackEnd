const express = require("express");
const app = express();
const Port = 3000;
var jwt = require("jsonwebtoken");
require("dotenv").config();


function validate(req, res, next) {
  const Secret = process.env.Secret;
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  jwt.verify(token, Secret, (err, decode) => {
    if (err) {
      return res.status(401).json({ error: "Token invalido" });
    }
  });

  next();
}

app.use(validate);

app.get("/bar", (req, res) => {
  res.sendStatus(204);
});

app.get("/bar-rj", (req, res) => {
  res.sendStatus(204);
});

app.listen(Port, () => {
  console.log("na Porta " + Port);
});
