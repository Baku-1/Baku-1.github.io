import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const history = useHistory();

  const handleAdminSignIn = () => {
    // Add your admin sign-in logic here
    console.log('Admin Sign In');
    history.push('/admin_dashboard');
  };

  const handleWalletSignIn = () => {
    // Add your wallet sign-in logic here
    console.log('Wallet Sign In');
    // Example logic to redirect based on wallet type
    const walletType = 'user'; // This should be determined by your wallet sign-in logic
    if (walletType === 'admin') {
      history.push('/admin_dashboard');
    } else {
      history.push('/user_dashboard');
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="my-4">Welcome to Ronin P2P Trading Platform</h1>
        <p>Explore the platform to trade NFTs and tokens securely and efficiently.</p>
        <button className="button" onClick={handleAdminSignIn}>Admin Sign In</button>
        <button className="button" onClick={handleWalletSignIn}>Wallet Sign In</button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
