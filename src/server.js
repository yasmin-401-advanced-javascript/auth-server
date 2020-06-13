'use strict';
const express = require('express');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
const app = express();
const route = require('./auth/router');


app.use(express.json());
app.use(route);


app.use('*', notFound);
app.use(serverError);


module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(` PORT ${PORT}`));

  },
};