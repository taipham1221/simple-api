// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1><b>Hello World!</b></h1>');
});

module.exports = app;
