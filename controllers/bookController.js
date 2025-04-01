const asyncHandler = require('express-async-handler');
const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

// @desc    Get book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = { getBooks, getBookById };
