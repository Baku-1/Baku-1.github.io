const User = require('../models/User');

class UserService {
  async createUser(data) {
    const user = new User(data);
    await user.save();
    return user;
  }

  async getUserById(id) {
    return User.findById(id);
  }

  async getAllUsers() {
    return User.find();
  }

  async updateUser(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserService();
