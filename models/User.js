const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  location: { type: { type: String }, coordinates: [Number] },
  isShop: { type: Boolean, default: false },
  //open: {type: Date , default:},
  //close: {type: Date , default:}
});
userSchema.index({ location: "2dsphere" });
userSchema.set('timestamps', true);

const User = mongoose.model("User", userSchema);

user.on('index', function(error) {
    // "_id index cannot be sparse"
    console.log(error);  
});

module.exports = User;