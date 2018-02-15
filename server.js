
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const server = express();
const PORT = config.port;
const USER_ERROR = 422;

server.use(bodyParser.json());


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});