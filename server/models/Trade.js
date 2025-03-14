const mongoose = require('mongoose');
const { sanitize } = require('express-validator'); // Added for sanitization

const TradeSchema = new mongoose.Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: function(v) {
        return mongoose.Types.ObjectId.isValid(v);
      },
      message: props => `${props.value} is not a valid user id`
    },
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: function(v) {
        return mongoose.Types.ObjectId.isValid(v);
      },
      message: props => `${props.value} is not a valid user id`
    },
  },
  nftIds: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length <= 5;
      },
      message: props => `You can only trade up to 5 NFTs or tokens`
    },
  },
  tokenIds: {
    type: [String],
    default: [],
    validate: {
      validator: function(v) {
        return v.length <= 5;
      },
      message: props => `You can only trade up to 5 NFTs or tokens`
    },
  },
  status: {
    type: String,
    enum: ['open', 'approved', 'rejected'],
    default: 'open',
  },
  attempts: {
    type: Number,
    default: 0,
    max: [3, 'Modification limit reached'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Trade', TradeSchema);
