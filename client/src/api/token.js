const express = require('express');
const router = express.Router();

// Mock token data
let tokens = [
  { id: 1, name: 'Token 1', symbol: 'TKN1' },
  { id: 2, name: 'Token 2', symbol: 'TKN2' },
];

// Get all tokens
router.get('/', (req, res) => {
  res.json(tokens);
});

// Get a token by ID
router.get('/:id', (req, res) => {
  const token = tokens.find((t) => t.id === parseInt(req.params.id));
  if (!token) return res.status(404).send('Token not found');
  res.json(token);
});

// Create a new token
router.post('/', (req, res) => {
  const newToken = {
    id: tokens.length + 1,
    name: req.body.name,
    symbol: req.body.symbol,
  };
  tokens.push(newToken);
  res.status(201).json(newToken);
});

module.exports = router;
