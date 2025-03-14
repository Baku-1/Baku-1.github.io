import React, { useState } from 'react';
import { ethers } from 'ethers';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleWalletSignIn = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);

        // Example logic to redirect based on wallet type or address
        // This should be replaced with your actual logic for determining the page to redirect to
        if (address === '0xYourAdminWalletAddress') {
          window.location.href = '/admin_dashboard';
        } else {
          window.location.href = '/user_dashboard';
        }
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="my-4">Welcome to Ronin P2P Trading Platform</h1>
        <p>Explore the platform to trade NFTs and tokens securely and efficiently.</p>
        <button className="button" onClick={handleWalletSignIn}>Wallet Sign In</button>
        {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
