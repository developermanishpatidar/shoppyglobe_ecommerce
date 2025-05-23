import mongoose from "mongoose";

// Product schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock_quantity: Number
})


const Product = mongoose.model("Product", productSchema);

export default Product;