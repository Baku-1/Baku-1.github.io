const express = require('express');
const router = express.Router();
const { getTrades, createTrade, modifyTrade, acceptTrade, rejectTrade } = require('../controllers/tradeController');

router.get('/', getTrades);
router.post('/', createTrade);
router.put('/:id', modifyTrade);
router.put('/:id/accept', acceptTrade);
router.put('/:id/reject', rejectTrade);

module.exports = router;
