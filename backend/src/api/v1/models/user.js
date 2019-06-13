const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  birth: { type: Date, required: true },
});

/**
 * @typedef User
 * @property {integer} _id
 * @property {string} name.required - User complete name
 * @property {string} username.required - Login username
 * @property {string} password.required - Login password
 * @property {date} birth.required - User's bith date
 */
module.exports = mongoose.model('User', userSchema);
