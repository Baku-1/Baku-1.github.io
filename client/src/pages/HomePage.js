import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/styles/theme.css';
import '../../assets/styles/UsersDashboard.css';
import '../../assets/styles/AdminDashboard.css';
import '../../index.css'; // Ensure the styles are correctly imported

const latestTrades = [
    { id: 1, title: 'Completed Trade 1', description: 'Details about completed trade 1' },
    { id: 2, title: 'Completed Trade 2', description: 'Details about completed trade 2' },
    // Add more completed trade objects here
];

const HomePage = () => {
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    };

    return (
        <div className="homepage">
            <header className="navbar">
                <h1>Welcome to Ronin P2P Trading</h1>
                <nav>
                    <button className="btn-trade" onClick={() => navigateTo('/signin')}>Sign In</button>
                    <button className="btn-trade" onClick={() => navigateTo('/trades')}>Trade Page</button>
                    <button className="btn-trade" onClick={() => navigateTo('/about')}>About</button>
                    <button className="btn-trade" onClick={() => navigateTo('/admin-dashboard')}>Admin Dashboard</button>
                    <button className="btn-trade" onClick={() => navigateTo('/user-dashboard')}>User Dashboard</button>
                </nav>
            </header>
            <div className="token">
                <div className="core"></div>
            </div>
            <div className="container centered-container">
                <h2>Latest Trades Completed</h2>
                <div className="grid-view">
                    {latestTrades.map(trade => (
                        <div className="trade-card grid-item" key={trade.id}>
                            <h3>{trade.title}</h3>
                            <p>{trade.description}</p>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className="btn-trade" onClick={() => navigateTo('/trades')}>View All Trades</button>
                    <button className="btn-trade" onClick={() => navigateTo('/create-trade')}>Create Trade</button>
                    <button className="btn-trade" onClick={() => navigateTo('/modify-trade')}>Modify Trade</button>
                    <button className="btn-trade" onClick={() => navigateTo('/view-trades')}>View Trades</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
