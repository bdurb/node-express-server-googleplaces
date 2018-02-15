
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = config.port;
const USER_ERROR = 422;

server.use(bodyParser.json());