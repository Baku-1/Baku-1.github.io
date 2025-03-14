const Token = require('../models/Token');

class TokenService {
  async createToken(data) {
    const token = new Token(data);
    await token.save();
    return token;
  }

  async getTokenById(id) {
    return Token.findById(id);
  }

  async getAllTokens() {
    return Token.find();
  }

  async updateToken(id, data) {
    return Token.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteToken(id) {
    return Token.findByIdAndDelete(id);
  }
}

module.exports = new TokenService();
