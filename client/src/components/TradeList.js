import React, { useState, useEffect } from 'react';
import { getAllTrades } from '../api/trade';

const TradeList = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      const trades = await getAllTrades();
      setTrades(trades);
    };

    fetchTrades();
  }, []);

  return (
    <div>
      <h1>Open Trades</h1>
      <ul>
        {trades.map((trade) => (
          <li key={trade._id}>{trade.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default TradeList;
