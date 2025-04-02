const asyncHandler = require('express-async-handler');
const Cart = require('../models/Cart');
const Book = require('../models/Book');

// @desc    Get cart items for logged-in user
// @route   GET /api/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.book', 'title price');
  if (!cart) {
    return res.status(404).json({ message: 'Cart is empty' });
  }
  res.json(cart);
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = asyncHandler(async (req, res) => {
  const { bookId, quantity } = req.body;

  // Fetch book details
  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const existingItem = cart.items.find(item => item.book.toString() === bookId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({
      book: bookId,
      title: book.title, // Include title
      price: book.price, // Include price
      quantity,
    });
  }

  await cart.save();
  res.json(cart);
});

// @desc    Remove item from cart
// @route   DELETE /api/cart/:bookId
// @access  Private
const removeFromCart = asyncHandler(async (req, res) => {
  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return res.status(404).json({ message: 'Cart is empty' });
  }  
  cart.items = cart.items.filter(item => item._id.toString() !== req.params.bookId);
  await cart.save();
  res.json(cart);
});

module.exports = { getCart, addToCart, removeFromCart };
