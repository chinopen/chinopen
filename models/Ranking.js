const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const rankingSchema = new Schema({
  score: Number,
  review: String,
  username:{ type: Schema.Types.ObjectId, ref: 'User' },
});

rankingSchema.set('timestamps', true);

const Ranking = mongoose.model('Ranking', rankingSchema);
;

module.exports = Ranking;