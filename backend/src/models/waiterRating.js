const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waiterRatingSchema = new Schema({
  
  waiterName: { type: String, required: true },
  rating: { type: String, required: true },
  comment: { type: String },
  userName: {
    type: String
  },
}, {
  timestamps: true  
});

waiterRatingSchema.set('toJSON', {
  virtuals: true
});

waiterRatingSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

module.exports = mongoose.model('WaiterRating', waiterRatingSchema);
