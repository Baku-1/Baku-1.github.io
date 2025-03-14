const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
      { id: user._id, email: user.email },
          process.env.JWT_SECRET,
              { expiresIn: '1h' }
                );
                };

                const authenticateToken = (req, res, next) => {
                  const token = req.header('Authorization')?.split(' ')[1];
                    if (!token) return res.status(401).json({ message: 'Access denied' });

                      try {
                          const verified = jwt.verify(token, process.env.JWT_SECRET);
                              req.user = verified;
                                  next();
                                    } catch (err) {
                                        res.status(400).json({ message: 'Invalid token' });
                                          }
                                          };

                                          module.exports = { generateToken, authenticateToken };