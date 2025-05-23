import Product from "../models/Product.model.js";


// Get all products
export async function getAllProducts (req, res) {
    try {
        const allProducts = await Product.find();
        return res.status(200).json(allProducts);
    }catch(error) {
        return res.status(500).json({message: error.message});
    }
    
}

// Get product by id 
export async function getProductById(req, res) {
    try {
        let { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).json(product);
    }catch(error) {
        return res.status(500).json({message: error.message});
    }
    
}