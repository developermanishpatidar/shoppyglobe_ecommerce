import Product from "./models/Product.model.js";

const productArr = [
    {
        "name": "Essence Mascara Lash Princess",
        "price": 9.99,
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "stock_quantity": 99,
    },
    {
        "name": "Eyeshadow Palette with Mirror",
        "price": 19.99,
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "stock_quantity": 34,
    },
    {
        "name": "Powder Canister",
        "price": 14.99,
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "stock_quantity": 89,
    },
    {
        "name": "Red Lipstick",
        "price": 12.99,
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "stock_quantity": 91,
    },
    {
        "name": "Red Nail Polish",
         "price": 8.99,
        "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        "stock_quantity": 79,
    },
    {
        "name": "Calvin Klein CK One",
        "price": 49.99,
        "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        "stock_quantity": 29,
    },
    {
        "name": "Chanel Coco Noir Eau De",
        "price": 129.99,
        "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        "stock_quantity": 58,
    },
    {
        "name": "Dior J'adore",
        "price": 89.99,
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "stock_quantity": 98,
    },
    {
        "name": "Dolce Shine Eau de",
        "price": 69.99,
        "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        "stock_quantity": 4,
    },
    {
        "name": "Gucci Bloom Eau de",
        "price": 79.99,
        "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        "stock_quantity": 91,
    }
]

export async function ProductsDB(){
    await Product.insertMany(productArr);
}