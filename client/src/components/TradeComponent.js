// TradeComponent.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTradesRequest,
  fetchTradesSuccess,
  fetchTradesFailure,
  addTrade,
  updateTrade,
  deleteTrade,
} from '../store/actions/tradeAction';

const TradeComponent = () => {
  const dispatch = useDispatch();
  const trades = useSelector((state) => state.trade.trades);
  const loading = useSelector((state) => state.trade.loading);
  const error = useSelector((state) => state.trade.error);
  const [newTrade, setNewTrade] = useState('');

  useEffect(() => {
    const fetchTrades = async () => {
      dispatch(fetchTradesRequest());
      try {
        // Replace with your API call
        const response = await fetch('/api/trades');
        const data = await response.json();
        dispatch(fetchTradesSuccess(data));
      } catch (error) {
        dispatch(fetchTradesFailure(error.message));
      }
    };

    fetchTrades();
  }, [dispatch]);

  const handleAddTrade = () => {
    const trade = { id: new Date().getTime(), name: newTrade };
    dispatch(addTrade(trade));
    setNewTrade('');
  };

  const handleUpdateTrade = (trade) => {
    const updatedTrade = { ...trade, name: `${trade.name} (Updated)` };
    dispatch(updateTrade(updatedTrade));
  };

  const handleDeleteTrade = (tradeId) => {
    dispatch(deleteTrade(tradeId));
  };

  return (
    <div>
      <h1>Trades</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {trades.map((trade) => (
          <li key={trade.id}>
            {trade.name}
            <button onClick={() => handleUpdateTrade(trade)}>Update</button>
            <button onClick={() => handleDeleteTrade(trade.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTrade}
        onChange={(e) => setNewTrade(e.target.value)}
        placeholder="New Trade"
      />
      <button onClick={handleAddTrade}>Add Trade</button>
    </div>
  );
};

export default TradeComponent;
