// HomePage.js

import React from 'react';
import './client/src/assets/styles/theme.css';
import './client/src/assets/styles/UsersDashboard.css';
import './client/src/assets/styles/AdminDashboard.css';

const trades = [
    { id: 1, title: 'Trade 1', description: 'Details about trade 1' },
    { id: 2, title: 'Trade 2', description: 'Details about trade 2' },
    // Add more trade objects here
];

const HomePage = () => {
    return (
        <div>
            <header>Welcome to Ronin P2P Trading</header>
            <div className="container">
                <h2>Open Trades</h2>
                <div className="grid-view">
                    {trades.map(trade => (
                        <div className="trade-card" key={trade.id}>
                            <h3>{trade.title}</h3>
                            <p>{trade.description}</p>
                            <div className="button-group">
                                <button className="button">View</button>
                                <button className="button">Modify</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
