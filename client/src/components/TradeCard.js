import React from 'react';

const TradeCard = ({ trade }) => {
  return (
    <div className="trade-card">
      <h2>{trade.title}</h2>
      <p>{trade.description}</p>
      <p>Items: {trade.items.join(', ')}</p>
      <p>Proposed By: {trade.proposer}</p>
      <button className="button" onClick={() => console.log('View Trade Details')}>View Details</button>
    </div>
  );
};

export default TradeCard;
