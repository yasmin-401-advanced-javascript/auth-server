'use strict';

const express = require('express');
const router = express.Router();
const users = require('./models/user-model.js');
const basicAuth = require('./basic-auth-middleware.js');


router.post('/signup',(req,res) =>
{
  users.create(req.body)
    .then(user => {
      let token = users.generateToken(user);
      res.status(200).send({token});
    })
    .catch(err => console.error(err));

}); 

router.post('/signin',basicAuth,(req,res) =>
{
  res.status(200).send({token: req.token});
}); 
router.get('/users',basicAuth,(req,res) =>
{
  let listed = users.list;
  res.status(200).json({listed});
}); 

module.exports = router;