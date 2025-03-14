const express = require('express');
const router = express.Router();

// Mock trade data
let trades = [
  { id: 1, title: 'Trade 1', description: 'Description for trade 1' },
  { id: 2, title: 'Trade 2', description: 'Description for trade 2' },
];

// Get all trades
router.get('/', (req, res) => {
  res.json(trades);
});

// Get a trade by ID
router.get('/:id', (req, res) => {
  const trade = trades.find((t) => t.id === parseInt(req.params.id));
  if (!trade) return res.status(404).send('Trade not found');
  res.json(trade);
});

// Create a new trade
router.post('/', (req, res) => {
  const newTrade = {
    id: trades.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  trades.push(newTrade);
  res.status(201).json(newTrade);
});

module.exports = router;
