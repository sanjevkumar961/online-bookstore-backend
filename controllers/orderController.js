const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// @desc    Checkout and create an order
// @route   POST /api/orders/checkout
// @access  Private
const checkout = asyncHandler(async (req, res) => {
  const { shippingDetails } = req.body;
  
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const order = new Order({
    user: req.user._id,
    orderItems: cart.items,
    shippingAddress: shippingDetails,
    totalPrice,
  });

  await order.save();
  await Cart.findOneAndDelete({ user: req.user._id });

  res.status(201).json({ message: 'Order placed successfully', order });
});

module.exports = { checkout };
