const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../config/jwt');

const register = async (req, res) => {
  const { email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = new User({ email, password: hashedPassword });
                    const savedUser = await newUser.save();

                        const token = generateToken(savedUser);
                            res.json({ token });
                              } catch (err) {
                                  res.status(500).json({ message: err.message });
                                    }
                                    };

                                    const login = async (req, res) => {
                                      const { email, password } = req.body;
                                        try {
                                            const user = await User.findOne({ email });
                                                if (!user) return res.status(400).json({ message: 'Invalid credentials' });

                                                    const isMatch = await bcrypt.compare(password, user.password);
                                                        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

                                                            const token = generateToken(user);
                                                                res.json({ token });
                                                                  } catch (err) {
                                                                      res.status(500).json({ message: err.message });
                                                                        }
                                                                        };

                                                                        module.exports = { register, login };