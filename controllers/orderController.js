// controllers/orderController.js
const Order = require('../models/order');
const Product = require('../models/product');

const placeOrder = async (req, res) => {
  try {
    const { userId } = req.user;
    const { products } = req.body;

    // Fetch product details and storing multiple products then after displaying
    //total amount

    const productIds = products.map((product) => product.productId); //extracting productids
    const fetchedProducts = await Product.find({ _id: { $in: productIds } }); //fetching all products

    // calculating total amount 
    const totalAmount = fetchedProducts.reduce(
      (amount, product) =>
        amount + product.price * products.find((p) => p.productId.equals(product._id)).quantity,
      0
    );

    const order = new Order({ userId, products, totalAmount });  //saving
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  placeOrder,
};
