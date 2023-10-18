require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const router = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
