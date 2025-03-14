const express = require('express');
const router = express.Router();

// Mock NFT data
let nfts = [
  { id: 1, name: 'NFT 1', description: 'Description for NFT 1' },
  { id: 2, name: 'NFT 2', description: 'Description for NFT 2' },
];

// Get all NFTs
router.get('/', (req, res) => {
  res.json(nfts);
});

// Get an NFT by ID
router.get('/:id', (req, res) => {
  const nft = nfts.find((n) => n.id === parseInt(req.params.id));
  if (!nft) return res.status(404).send('NFT not found');
  res.json(nft);
});

// Create a new NFT
router.post('/', (req, res) => {
  const newNFT = {
    id: nfts.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  nfts.push(newNFT);
  res.status(201).json(newNFT);
});

module.exports = router;
