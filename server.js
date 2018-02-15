
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');


const server = express();
const PORT = config.port;
const USER_ERROR = 422;

server.use(bodyParser.json());

server.post('/places', (req, res) => {
  const place = req.body.place;
  if (!place) {
    res.send(USER_ERROR);
    res.json({ error: 'You must provide a place' });
  }
  let data = fetch(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=${place}&key=${config.gmaps.apiKey}`,{ method: 'POST'})
    .then(res => res.json(data))
    .then(json => {
      res.status(200).json(first)
    });
});



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});