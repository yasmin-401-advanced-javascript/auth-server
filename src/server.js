'use strict';
const express = require('express');
const router = require('./auth/router.js');

const app = express();
app.use(express.json());
app.use(router);

module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(` PORT ${PORT}`));

  },
};