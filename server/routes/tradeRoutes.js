const express = require('express');
const { createTrade, getTradeById } = require('../controllers/tradeController');

const router = express.Router();

router.post('/', createTrade);
router.get('/:id', getTradeById);

module.exports = router;
