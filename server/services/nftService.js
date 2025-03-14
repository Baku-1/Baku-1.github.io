const NFT = require('../models/NFT');

class NFTService {
  async createNFT(data) {
    const nft = new NFT(data);
    await nft.save();
    return nft;
  }

  async getNFTById(id) {
    return NFT.findById(id);
  }

  async getAllNFTs() {
    return NFT.find();
  }

  async updateNFT(id, data) {
    return NFT.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteNFT(id) {
    return NFT.findByIdAndDelete(id);
  }
}

module.exports = new NFTService();
