import { addProductsOnCart, deleteProductsFromCart, updateProductsOnCart } from "../controllers/cart.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


// Cart routes with verify token functionality
export function cartRoutes (app) {
    app.post('/cart/:productId', verifyToken, addProductsOnCart);
    app.put('/cart/:productId', verifyToken, updateProductsOnCart);
    app.delete('/cart/:productId', verifyToken, deleteProductsFromCart);
}