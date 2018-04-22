const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
shopSchema.index({ location: "2dsphere" });

let Shop = mongoose.model("Shop", shopSchema);

shop.on('index', function(error) {
    // "_id index cannot be sparse"
    console.log(error);
});

module.exports = Shop;