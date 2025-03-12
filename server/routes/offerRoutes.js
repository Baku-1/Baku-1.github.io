const express = require('express');
const router = express.Router();
const { getOffers, createOffer, modifyOffer, acceptOffer, rejectOffer } = require('../controllers/offerController');

router.get('/', getOffers);
router.post('/', createOffer);
router.put('/:id', modifyOffer);
router.put('/:id/accept', acceptOffer);
router.put('/:id/reject', rejectOffer);

module.exports = router;