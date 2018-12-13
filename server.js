// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({
  extended: true
}));

require('./app/routes')(app, db);

app.listen(port, () => {
  console.log('We are live on ' + port);
});