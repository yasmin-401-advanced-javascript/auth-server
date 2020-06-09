'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require('./auth-schema.js');
const SECRET = process.env.SECRET;

userSchema.create = async function (record) {
  /**
     * record
     * {username:"yasmin",password:"1234"}
     */

  if (!userSchema[record.userName]) {
    record.password = await bcrypt.hash(record.password, 5);
    userSchema[record.userName] = record;
    return record;
  }
  return Promise.reject(); 
};
userSchema.authenticateBasic = async function (user, pass) {
  const valid = await bcrypt.compare(pass, userSchema[user.password]);
  return valid ? userSchema[user] : Promise.reject('wrong password');
};
userSchema.generateToken = function (user) {
  const token = jwt.sign({ userName: user.userName }, SECRET);
  return token;
};
userSchema.list =  async function(){
  let results = await this.find({});
  return results;
};

module.exports = userSchema;