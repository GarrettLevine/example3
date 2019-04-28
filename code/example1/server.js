'use strict';

const express = require('express');
const app = express();

const PORT = 3030;

app.get('/', (req, res, next) => {
  res.send('<h1>Root Route Page</h1>');
});

app.get('/other-url', (req, res, next) => {
  res.send('<h1>Other Route Page</h1>');
});

// 1. Add route handler to catch all requests


app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
