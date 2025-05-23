import { getAllProducts, getProductById } from "../controllers/product.controller.js";


// Products routes
export function productRoutes (app) {
    app.get('/products', getAllProducts);
    app.get('/products/:id', getProductById);
}