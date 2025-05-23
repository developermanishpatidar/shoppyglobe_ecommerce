import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { productRoutes } from './routes/product.routes.js';
import { ProductsDB } from './products.js';
import { cartRoutes } from './routes/cart.routes.js';
import cors from 'cors';
import { userRoutes } from './routes/user.routes.js';


// Database connnection
mongoose.connect('mongodb://127.0.0.1:27017/shoppyglobe')
.then(()=>{
    console.log("DB CONNECTED");
}).catch((error)=>{
    console.log("DB NOT CONNECTED", error);
})


//Body parsing middleware
app.use(express.json());
app.use(cors())


// Dummy data to Add products into database 
// ProductsDB();


// Middleware
productRoutes(app);
cartRoutes(app);
userRoutes(app)

// Server connect
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log("SERVER IS CONNECTED AT PORT: ", PORT);
})