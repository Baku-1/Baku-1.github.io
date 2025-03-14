const Trade = require('../models/Trade');

class TradeService {
  async createTrade(data) {
    const trade = new Trade(data);
    await trade.save();
    return trade;
  }

  async getTradeById(id) {
    return Trade.findById(id);
  }

  async getAllTrades() {
    return Trade.find();
  }

  async updateTrade(id, data) {
    return Trade.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteTrade(id) {
    return Trade.findByIdAndDelete(id);
  }
}

module.exports = new TradeService();
