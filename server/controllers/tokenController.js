const NFTService = require('../services/nftService');

const createNFT = async (req, res) => {
  try {
    const nft = await NFTService.createNFT(req.body);
    res.status(201).json(nft);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getNFTById = async (req, res) => {
  try {
    const nft = await NFTService.getNFTById(req.params.id);
    res.status(200).json(nft);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createNFT,
  getNFTById
};
