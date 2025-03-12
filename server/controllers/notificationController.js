const Notification = require('../models/Notification');
const redisClient = require('../config/redis');

const CACHE_EXPIRATION = 60 * 60; // Cache expiration time in seconds (1 hour)

const getNotifications = async (req, res) => {
  try {
      const cacheKey = 'notifications';
          const cachedNotifications = await redisClient.get(cacheKey);

              if (cachedNotifications) {
                    return res.json(JSON.parse(cachedNotifications));
                        }

                            const notifications = await Notification.find();
                                await redisClient.setEx(cacheKey, CACHE_EXPIRATION, JSON.stringify(notifications));

                                    res.json(notifications);
                                      } catch (err) {
                                          res.status(500).json({ message: err.message });
                                            }
                                            };

                                            const createNotification = async (req, res) => {
                                              const notification = new Notification({
                                                  message: req.body.message,
                                                      user: req.body.user,
                                                        });

                                                          try {
                                                              const newNotification = await notification.save();
                                                                  await redisClient.del('notifications'); // Invalidate cache

                                                                      res.status(201).json(newNotification);
                                                                        } catch (err) {
                                                                            res.status(400).json({ message: err.message });
                                                                              }
                                                                              };

                                                                              module.exports = {
                                                                                getNotifications,
                                                                                  createNotification,
                                                                                  };