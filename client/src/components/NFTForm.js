import React, { useState } from 'react';
import { createNFT } from '../api/nft';

const NFTForm = () => {
  const [formData, setFormData] = useState({
    tokenId: '',
    owner: '',
    metadata: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNFT(formData);
    // Handle success or error
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tokenId" value={formData.tokenId} onChange={handleChange} placeholder="Token ID" />
      <input type="text" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner ID" />
      <input type="text" name="metadata" value={formData.metadata} onChange={handleChange} placeholder="Metadata" />
      <button type="submit">Create NFT</button>
    </form>
  );
};

export default NFTForm;
