import React from 'react';
import '../../assets/styles/theme.css';
import '../../assets/styles/UsersDashboard.css';
import '../../assets/styles/AdminDashboard.css';

const latestTrades = [
    { id: 1, title: 'Completed Trade 1', description: 'Details about completed trade 1' },
    { id: 2, title: 'Completed Trade 2', description: 'Details about completed trade 2' },
    // Add more completed trade objects here
];

const HomePage = () => {
    return (
        <div>
            <header>Welcome to Ronin P2P Trading</header>
            <div className="container">
                <h2>Latest Trades Completed</h2>
                <div className="grid-view">
                    {latestTrades.map(trade => (
                        <div className="trade-card" key={trade.id}>
                            <h3>{trade.title}</h3>
                            <p>{trade.description}</p>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className="btn-trade">View All Trades</button>
                </div>
                <div className="token">
                    <div className="core"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
