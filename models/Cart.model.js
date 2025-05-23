import mongoose from "mongoose";

// Cart schema
const cartSchema = new mongoose.Schema({
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }]
});


const Cart = mongoose.model('Cart', cartSchema);

export default Cart;