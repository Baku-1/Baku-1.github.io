const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  offerer: { type: String, required: true },
    agreementId: { type: String, required: true },
      nfts: { type: [String], required: true, maxlength: 5 },
        modificationCount: { type: Number, default: 0 },
          isActive: { type: Boolean, default: true },
          });

          module.exports = mongoose.model('Offer', offerSchema);