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
        <button className="button" onClick={() => console.log('Sign In')}>Sign In</button>
        <button className="button" onClick={() => console.log('Create Trade')}>Create Trade</button>
        <button className="button" onClick={() => console.log('Disburse Rewards')}>Disburse Rewards</button>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
