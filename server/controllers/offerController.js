const Offer = require('../models/Offer');

const getOffers = async (req, res) => {
  try {
      const offers = await Offer.find();
          res.json(offers);
            } catch (err) {
                res.status(500).json({ message: err.message });
                  }
                  };

                  const createOffer = async (req, res) => {
                    const offer = new Offer({
                        offerer: req.body.offerer,
                            agreementId: req.body.agreementId,
                                nfts: req.body.nfts,
                                    modificationCount: 0,
                                        isActive: true,
                                          });

                                            try {
                                                const newOffer = await offer.save();
                                                    res.status(201).json(newOffer);
                                                      } catch (err) {
                                                          res.status(400).json({ message: err.message });
                                                            }
                                                            };

                                                            const modifyOffer = async (req, res) => {
                                                              try {
                                                                  const offer = await Offer.findById(req.params.id);
                                                                      if (!offer) return res.status(404).json({ message: 'Offer not found' });

                                                                          if (offer.modificationCount >= 3) return res.status(400).json({ message: 'Modification limit reached' });

                                                                              offer.nfts = req.body.nfts;
                                                                                  offer.modificationCount += 1;
                                                                                      await offer.save();

                                                                                          res.json(offer);
                                                                                            } catch (err) {
                                                                                                res.status(500).json({ message: err.message });
                                                                                                  }
                                                                                                  };

                                                                                                  const acceptOffer = async (req, res) => {
                                                                                                    try {
                                                                                                        const offer = await Offer.findById(req.params.id);
                                                                                                            if (!offer) return res.status(404).json({ message: 'Offer not found' });

                                                                                                                offer.isActive = false;
                                                                                                                    await offer.save();

                                                                                                                        res.json(offer);
                                                                                                                          } catch (err) {
                                                                                                                              res.status(500).json({ message: err.message });
                                                                                                                                }
                                                                                                                                };

                                                                                                                                const rejectOffer = async (req, res) => {
                                                                                                                                  try {
                                                                                                                                      const offer = await Offer.findById(req.params.id);
                                                                                                                                          if (!offer) return res.status(404).json({ message: 'Offer not found' });

                                                                                                                                              offer.isActive = false;
                                                                                                                                                  await offer.save();

                                                                                                                                                      res.json(offer);
                                                                                                                                                        } catch (err) {
                                                                                                                                                            res.status(500).json({ message: err.message });
                                                                                                                                                              }
                                                                                                                                                              };

                                                                                                                                                              module.exports = {
                                                                                                                                                                getOffers,
                                                                                                                                                                  createOffer,
                                                                                                                                                                    modifyOffer,
                                                                                                                                                                      acceptOffer,
                                                                                                                                                                        rejectOffer,
                                                                                                                                                                        };