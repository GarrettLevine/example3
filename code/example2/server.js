'use strict';

const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

// 1. Change route handler to return static folder
app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// 2. Create an about page

// 3. Add route handler to catch all requests

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
