import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/styles/theme.css';
import '../../assets/styles/UsersDashboard.css';
import '../../assets/styles/AdminDashboard.css';
import '../../index.css'; // Ensure the styles are correctly imported

const mockTrades = [
    { id: 1, title: 'Trade 1', description: 'Details about trade 1: 3 NFTs, 2 Tokens' },
    { id: 2, title: 'Trade 2', description: 'Details about trade 2: 2 NFTs, 3 Tokens' },
    { id: 3, title: 'Trade 3', description: 'Details about trade 3: 1 NFT, 4 Tokens' },
    { id: 4, title: 'Trade 4', description: 'Details about trade 4: 5 NFTs' },
    { id: 5, title: 'Trade 5', description: 'Details about trade 5: 4 NFTs, 1 Token' },
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
                <nav className="button-container">
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
                    {mockTrades.map(trade => (
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
