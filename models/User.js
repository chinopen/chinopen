const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  isShop: { type: Boolean, default: false },
  isCoords: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
  loc: { type: {type: String }, coordinates: [Number]},
  open: { type: String, default: null },
  close: { type: String, default: null },
  ranking: {type: Array, default: [3]},
});

userSchema.index({ location: "2dsphere" });
userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;


