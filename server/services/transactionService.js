const mongoose = require('mongoose');
const UserTransaction = require('../models/UserTransaction');
const { sanitize } = require('express-validator'); // Added for sanitization

const logTransaction = async (user, amount) => {
  try {
    const sanitizedUser = sanitize(user).trim().escape();
    const sanitizedAmount = sanitize(amount).toFloat();

    let transaction = await UserTransaction.findOne({ user: sanitizedUser });
    if (!transaction) {
      transaction = new UserTransaction({ user: sanitizedUser, totalAmount: 0, transactionCount: 0 });
    }
    transaction.totalAmount += sanitizedAmount;
    transaction.transactionCount += 1;
    await transaction.save();
  } catch (error) {
    console.error('Failed to log transaction:', error);
  }
};

const getTopUsers = async (limit = 5) => {
  try {
    const topUsers = await UserTransaction.find().sort({ totalAmount: -1 }).limit(limit);
    return topUsers;
  } catch (error) {
    console.error('Failed to get top users:', error);
    throw new Error('Failed to get top users');
  }
};

module.exports = { logTransaction, getTopUsers };
