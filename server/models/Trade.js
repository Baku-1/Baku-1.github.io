const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  name: { type: String, required: true },
    nfts: { type: [String], required: true, maxlength: 5 },
      creator: { type: String, required: true },
        modificationCount: { type: Number, default: 0 },
          isActive: { type: Boolean, default: true },
          });

          module.exports = mongoose.model('Trade', tradeSchema);