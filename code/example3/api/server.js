'use strict';

const express = require('express');
const path = require('path');
const http = require('http');

const router = express();

const PORT = 9090;

const { router: fruitRoutes } = require('./routes/fruits/fruitRoutes');

router.use('/api/fruits', fruitRoutes);

// 1. Change route handler to return static folder

// 2. Add route handler to catch all requests

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
