const { Schema, model }= require('mongoose');

const orderSchema = new Schema({
  userName: {
      type: String
  },
  products: [{
      nombre: String,
      precio: Number,
      cantidad: Number
  }],
  total: {
      type: Number,
      required: true
  }
});

module.exports = model('Order', orderSchema);
