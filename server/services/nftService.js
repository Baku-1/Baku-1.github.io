const NFT = require('../models/NFT');

class NFTService {
  async getNFTById(id) {
    return NFT.findById(id);
  }

  async getAllNFTs() {
    return NFT.find();
  }
}

module.exports = new NFTService();
