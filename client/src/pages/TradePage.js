import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TradeCard from '../components/TradeCard';
import './TradePage.css'; // Ensure you have this import for the CSS

const TradePage = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get('/api/trades');
        setTrades(response.data);
      } catch (error) {
        console.error('Error fetching trades:', error);
      }
    };

    fetchTrades();

    const intervalId = setInterval(fetchTrades, 5000); // Fetch trades every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleCreateTrade = () => {
    // Logic for creating a trade
    console.log("Create Trade button clicked");
  };

  const handleModifyTrade = () => {
    // Logic for modifying a trade
    console.log("Modify Trade button clicked");
  };

  const handleViewTrades = () => {
    // Logic for viewing trades
    console.log("View Trades button clicked");
  };

  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="my-4">Trade Agreements</h1>
        <div className="button-container">
          <button className="btn-trade" onClick={handleCreateTrade}>Create Trade</button>
          <button className="btn-trade" onClick={handleModifyTrade}>Modify Trade</button>
          <button className="btn-trade" onClick={handleViewTrades}>View Trades</button>
        </div>
        <div className="row">
          {trades.map((trade) => (
            <TradeCard key={trade._id} trade={trade} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TradePage;
