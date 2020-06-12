'use strict';

const express = require('express');
const router = express.Router();
const users = require('./models/user/user-model.js');
const basicAuth = require('./middleware/basic.js');

router.post('/signup', saveInfo);
router.post('/signin', basicAuth, getUserInfo);
router.get('/users' , getAllUsers);

async function saveInfo (req,res){
  try{
    const user = await users.save(req.body);
    const token = users.generateToken(user);
    res.json({ token });
  }catch(err){
    res.status(403).send('user already exists');
  }
}
function getUserInfo(req, res){
  res.json({ token: req.token , user: req.user });
}

async function getAllUsers (req,res){
  const allUsers = await users.get({});
  res.json( {users : allUsers} );
}

module.exports = router;