const express = require('express');
const connectDB = require('./config/db');
const redisClient = require('./config/redis');
const tradeRoutes = require('./routes/tradeRoutes');
const offerRoutes = require('./routes/offerRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/trades', tradeRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/users', userRoutes);

module.exports = app;