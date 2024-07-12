const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waiterRatingSchema = new Schema({
  waiterName: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String },
});

module.exports = mongoose.model('WaiterRating', waiterRatingSchema);