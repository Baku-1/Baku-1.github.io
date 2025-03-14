import React, { useState } from 'react';
import { createTrade } from '../api/trade';

const TradeForm = () => {
  const [formData, setFormData] = useState({
    user1: '',
    user2: '',
    nftIds: [],
    tokenIds: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTrade(formData);
    // Handle success or error
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user1" value={formData.user1} onChange={handleChange} placeholder="User 1 ID" />
      <input type="text" name="user2" value={formData.user2} onChange={handleChange} placeholder="User 2 ID" />
      <input type="text" name="nftIds" value={formData.nftIds} onChange={handleChange} placeholder="NFT IDs" />
      <input type="text" name="tokenIds" value={formData.tokenIds} onChange={handleChange} placeholder="Token IDs" />
      <button type="submit">Create Trade</button>
    </form>
  );
};

export default TradeForm;
