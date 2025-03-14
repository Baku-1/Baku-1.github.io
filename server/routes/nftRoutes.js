const express = require('express');
const { createNFT, getNFTById } = require('../controllers/nftController');

const router = express.Router();

router.post('/', createNFT);
router.get('/:id', getNFTById);

module.exports = router;
