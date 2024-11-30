#!/usr/bin/node
/* Creating a small HTTP sever using express module. */
const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 1245;
const host = 'localhost';

app.use('/', routes);

app.listen(port, () => {
  console.log(`The app is listening on http://${host}:${port}.`);
});

module.exports = app;
