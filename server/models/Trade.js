const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  nftIds: {
    type: [String],
    default: [],
  },
  tokenIds: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ['open', 'approved', 'rejected'],
    default: 'open',
  },
  attempts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Trade', TradeSchema);
