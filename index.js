const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1><b>Hello World!</b></h1>');
});

app.listen(port, () => {
  console.log(`Listening at port :${port}`);
});
