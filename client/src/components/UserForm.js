import React, { useState } from 'react';
import { createUser } from '../api/user';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    walletAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(formData);
    // Handle success or error
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input type="text" name="walletAddress" value={formData.walletAddress} onChange={handleChange} placeholder="Wallet Address" />
      <button type="submit">Register User</button>
    </form>
  );
};

export default UserForm;
