import Cart from "../models/Cart.model.js";

// Add Products on Cart
export async function addProductsOnCart (req, res) {
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    let cart = await Cart.findOne();
    if (!cart) cart = new Cart({ products: [] });

    const existingProduct = cart.products.find(p => p.productId.toString() === productId);
    
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ quantity, productId });
    }

    await cart.save();
    res.status(201).json(cart);
  }catch(error) {
    res.status(500).json({message: error.message})
  }
  
}

// Update products on cart
export async function updateProductsOnCart (req, res) {
  const { productId } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await Cart.findOne();
    if (!cart) return res.status(404).json({message: 'Cart not found'});

    const productInCart = cart.products.find(p => p.productId.toString() === productId);
    if (!productInCart) return res.status(404).json({message: 'Product not in cart'});

    productInCart.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  }catch(error) {
    res.status(500).json({message: error.message})
  }
}

// delete products from cart
export async function deleteProductsFromCart(req, res)  {
  const { productId } = req.params;
  try{
      const cart = await Cart.findOne();
      if (!cart) return res.status(404).json({message: 'Cart not found'});

      cart.products = cart.products.filter(p => p.productId.toString() !== productId);
      await cart.save();

      res.status(200).json({message: "Product deleted successfully from cart"});
  }catch(error) {
    res.status(500).json({message: error.message})
  }
}


