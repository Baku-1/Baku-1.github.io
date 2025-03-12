const Trade = require('../models/Trade');
const redisClient = require('../config/redis');
const { batchTransfer } = require('../services/batchTransferService');
const { logTransaction } = require('../services/transactionService');

const CACHE_EXPIRATION = 60 * 60; // Cache expiration time in seconds (1 hour)

const getTrades = async (req, res) => {
  try {
      const cacheKey = 'trades';
          const cachedTrades = await redisClient.get(cacheKey);

              if (cachedTrades) {
                    return res.json(JSON.parse(cachedTrades));
                        }

                            const trades = await Trade.find();
                                await redisClient.setEx(cacheKey, CACHE_EXPIRATION, JSON.stringify(trades));

                                    res.json(trades);
                                      } catch (err) {
                                          res.status(500).json({ message: err.message });
                                            }
                                            };

                                            const createTrade = async (req, res) => {
                                              const trade = new Trade({
                                                  name: req.body.name,
                                                      nfts: req.body.nfts,
                                                          creator: req.body.creator,
                                                              modificationCount: 0,
                                                                  isActive: true,
                                                                    });

                                                                      try {
                                                                          const newTrade = await trade.save();
                                                                              await redisClient.del('trades'); // Invalidate cache

                                                                                  res.status(201).json(newTrade);
                                                                                    } catch (err) {
                                                                                        res.status(400).json({ message: err.message });
                                                                                          }
                                                                                          };

                                                                                          const modifyTrade = async (req, res) => {
                                                                                            try {
                                                                                                const trade = await Trade.findById(req.params.id);
                                                                                                    if (!trade) return res.status(404).json({ message: 'Trade not found' });

                                                                                                        if (trade.modificationCount >= 3) return res.status(400).json({ message: 'Modification limit reached' });

                                                                                                            trade.nfts = req.body.nfts;
                                                                                                                trade.modificationCount += 1;
                                                                                                                    await trade.save();
                                                                                                                        await redisClient.del('trades'); // Invalidate cache

                                                                                                                            res.json(trade);
                                                                                                                              } catch (err) {
                                                                                                                                  res.status(500).json({ message: err.message });
                                                                                                                                    }
                                                                                                                                    };

                                                                                                                                    const acceptTrade = async (req, res) => {
                                                                                                                                      try {
                                                                                                                                          const trade = await Trade.findById(req.params.id);
                                                                                                                                              if (!trade) return res.status(404).json({ message: 'Trade not found' });

                                                                                                                                                  trade.isActive = false;
                                                                                                                                                      await trade.save();
                                                                                                                                                          await redisClient.del('trades'); // Invalidate cache

                                                                                                                                                              // Perform batch transfer
                                                                                                                                                                  const recipients = [trade.creator, req.body.offerer];
                                                                                                                                                                      const amounts = [1, 1]; // Placeholder for actual amounts
                                                                                                                                                                          await batchTransfer(recipients, amounts);

                                                                                                                                                                              // Log the transaction for rewards calculation
                                                                                                                                                                                  await logTransaction(trade.creator, amounts[0]);
                                                                                                                                                                                      await logTransaction(req.body.offerer, amounts[1]);

                                                                                                                                                                                          res.json(trade);
                                                                                                                                                                                            } catch (err) {
                                                                                                                                                                                                res.status(500).json({ message: err.message });
                                                                                                                                                                                                  }
                                                                                                                                                                                                  };

                                                                                                                                                                                                  const rejectTrade = async (req, res) => {
                                                                                                                                                                                                    try {
                                                                                                                                                                                                        const trade = await Trade.findById(req.params.id);
                                                                                                                                                                                                            if (!trade) return res.status(404).json({ message: 'Trade not found' });

                                                                                                                                                                                                                trade.isActive = false;
                                                                                                                                                                                                                    await trade.save();
                                                                                                                                                                                                                        await redisClient.del('trades'); // Invalidate cache

                                                                                                                                                                                                                            res.json(trade);
                                                                                                                                                                                                                              } catch (err) {
                                                                                                                                                                                                                                  res.status(500).json({ message: err.message });
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                    module.exports = {
                                                                                                                                                                                                                                      getTrades,
                                                                                                                                                                                                                                        createTrade,
                                                                                                                                                                                                                                          modifyTrade,
                                                                                                                                                                                                                                            acceptTrade,
                                                                                                                                                                                                                                              rejectTrade,
                                                                                                                                                                                                                                              };