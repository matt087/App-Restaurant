const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  cliente: { type: String, required: true },
  productos: [
    {
      menuItem: { type: Schema.Types.ObjectId, ref: 'dish' }, 
      cantidad: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);