
const config = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const server = express();
const PORT = config.port;
const USER_ERROR = 422;
const STATUS_SUCCESS = 200;
const KEY_GMAPS = config.gmaps.apiKey;
const URI_TEXT_SEARCH = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';

server.use(bodyParser.json());

server.get('/place', (req, res) => {
  const query = req.query.query;
  const url = URI_TEXT_SEARCH + query + '&key=' + KEY_GMAPS;
  fetch(url)
    .then(place => place.json())
    .then(place => {
      res.status(STATUS_SUCCESS);
      res.send(place);
    })
    .catch(err => {
      res.status(USER_ERROR);
      res.send({err: err})
    });
});



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});