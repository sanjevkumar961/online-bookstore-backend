const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');


connectDB();

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://www.postman.com']; // Change if needed

app.use(cors({ 
  origin: allowedOrigins,
  credentials: true // Allow cookies & authentication
}));

app.use(express.json());

// Import Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
