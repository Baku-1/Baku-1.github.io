import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TradeCard from '../components/TradeCard';

const TradePage = () => {
  const [trades, setTrades] = useState([]);

    useEffect(() => {
        const fetchTrades = async () => {
              const response = await axios.get('/api/trades');
                    setTrades(response.data);
                        };

                            fetchTrades();
                              }, []);

                                return (
                                    <div>
                                          <Header />
                                                <main className="container">
                                                        <h1 className="my-4">Trade Agreements</h1>
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