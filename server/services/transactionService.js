const mongoose = require('mongoose');
const UserTransaction = require('../models/UserTransaction');

const logTransaction = async (user, amount) => {
  try {
      let transaction = await UserTransaction.findOne({ user });
          if (!transaction) {
                transaction = new UserTransaction({ user, totalAmount: 0, transactionCount: 0 });
                    }
                        transaction.totalAmount += amount;
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