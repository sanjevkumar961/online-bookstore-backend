# Online Bookstore - Backend

This is the backend of a simple e-commerce application for an online bookstore. It provides RESTful APIs for managing books, users, carts, and orders.

## Features

- 📚 **Books API** - Fetch books, search by title, author, or category.
- 🔐 **User Authentication** - Signup, login, and JWT-based authentication.
- 🛒 **Cart Management** - Add, remove, and view cart items.
- ✅ **Order Processing** - Checkout and order placement.
- 🛡️ **Protected Routes** - Only authenticated users can access cart and order functionalities.
- 🗄️ **MongoDB Database** - Uses Mongoose for database interactions.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Express Validator
- **Middleware:** Morgan (logging), CORS, Body-parser

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sanjevkumar961/online-bookstore-backend.git
   cd online-bookstore-backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```sh
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/bookstore
   JWT_SECRET=your_secret_key
   ```

4. **Run the server:**
   ```sh
   npm run dev
   ```

5. **Test APIs using Postman or Curl:**
   ```sh
   http://localhost:3001/api/books
   ```

## Project Structure
```
📂 src
 ┣ 📂 models        # Mongoose schemas (Book, User, Cart, Order)
 ┣ 📂 routes        # Express routes (books, users, cart, orders)
 ┣ 📂 controllers   # Business logic for handling API requests
 ┣ 📂 middleware    # Authentication & validation middleware
 ┣ 📜 server.js     # Entry point to start the Express server
 ┣ 📜 config.js     # Database connection setup
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT token

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book details

### Cart
- `POST /api/cart` - Add a book to the cart
- `GET /api/cart` - Get cart items
- `DELETE /api/cart/:id` - Remove item from the cart

### Orders
- `POST /api/orders` - Place an order
- `GET /api/orders` - Get user orders (requires authentication)

## Error Handling & Validation
- Express Validator is used to validate inputs.
- Centralized error handling middleware ensures consistent error responses.

## Upcoming Enhancements
- ✅ **Order tracking system**
- 💾 **Database indexing for performance**

## Contributing
Pull requests are welcome! Please follow the coding standards and document changes.
