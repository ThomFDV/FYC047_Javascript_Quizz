'use strict';
require('dotenv').config();
const express = require('express');
const models = require('./models');
const RouteBuilder = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


RouteBuilder.build(app);

const PORT = process.env.PORT || 3000;
models.sequelize.authenticate().then(() => {
    return models.sequelize.sync();
});

models.sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listen on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });