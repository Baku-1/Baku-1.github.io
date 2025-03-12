const mongoose = require('mongoose');

const userTransactionSchema = new mongoose.Schema({
      user: { type: String, required: true },
        totalAmount: { type: Number, required: true },
          transactionCount: { type: Number, required: true },
);

module.exports = mongoose.model('UserTransaction', userTransactionSchema);
});