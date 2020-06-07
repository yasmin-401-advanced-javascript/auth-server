/**
 * mongoose library
 * @mongoose
 */

const mongoose = require('mongoose');

const users = mongoose.Schema({
  userName: { type: String, required: true, unique: true},
  password: { type: Number, required: true },
});

module.exports = mongoose.model('users', users);