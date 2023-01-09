// REQUIRE STATEMENTS
require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', (req, res) => {
  axios({
    method: req.method,
    url: path.join(process.env.API_URL, req.url),
    data: req.body,
    headers: {
      'User-Agent': 'request',
      Authorization: process.env.AUTH,
    },
  })
    .then((resAPI) => res.status(resAPI.status).send(resAPI.data))
    .catch((errAPI) => {
      if (errAPI.response) {
        res.status(errAPI.response.status).send(errAPI);
      } else {
        res.sendStatus(404);
      }
    });
});

const PORT = process.env.PORT || 3300;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
