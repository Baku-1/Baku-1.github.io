import React, { useState } from 'react';
import { createToken } from '../api/token';

const TokenForm = () => {
  const [formData, setFormData] = useState({
    tokenAddress: '',
    owner: '',
    balance: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createToken(formData);
    // Handle success or error
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tokenAddress" value={formData.tokenAddress} onChange={handleChange} placeholder="Token Address" />
      <input type="text" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner ID" />
      <input type="number" name="balance" value={formData.balance} onChange={handleChange} placeholder="Balance" />
      <button type="submit">Create Token</button>
    </form>
  );
};

export default TokenForm;
