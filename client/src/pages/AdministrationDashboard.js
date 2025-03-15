import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="my-4">Admin Dashboard</h1>
        <p>Manage the platform and view transaction statistics.</p>
        <button onClick={() => console.log('View Trades')}>View Trades</button>
      <button onClick={() => console.log('Manage Fees')}>Manage Fees</button>
      <button onClick={() => console.log('Distribute Rewards')}>Distribute Rewards</button>
      {/* Add other buttons and functionalities as needed */
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
