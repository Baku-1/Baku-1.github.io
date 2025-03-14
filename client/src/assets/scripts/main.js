document.addEventListener('DOMContentLoaded', function() {
  // Fetch and display open trades
  fetchTrades();
});

function fetchTrades() {
  // Example function to fetch trades from an API or blockchain
  const trades = [
    { id: 1, title: 'Trade 1', description: 'Description of Trade 1', nfts: [], tokens: [] },
    { id: 2, title: 'Trade 2', description: 'Description of Trade 2', nfts: [], tokens: [] }
  ];

  const tradeList = document.getElementById('trade-list');
  trades.forEach(trade => {
    const tradeItem = document.createElement('div');
    tradeItem.className = 'trade-item';
    tradeItem.innerHTML = `
      <h2>${trade.title}</h2>
      <p>${trade.description}</p>
      <button onclick="modifyTrade(${trade.id})">Modify Trade</button>
      <button onclick="approveTrade(${trade.id})">Approve Trade</button>
    `;
    tradeList.appendChild(tradeItem);
  });
}

function modifyTrade(tradeId) {
  // Logic to modify a trade
  const trade = findTradeById(tradeId);
  if (!trade) return;

  // Allow up to 3 modifications
  if (trade.modifications && trade.modifications.length >= 3) {
    alert('You have reached the maximum number of modifications for this trade.');
    return;
  }

  // Example modification logic
  const newNft = prompt('Enter new NFT details:');
  const newToken = prompt('Enter new token details:');
  if (newNft) trade.nfts.push(newNft);
  if (newToken) trade.tokens.push(newToken);

  // Track modifications
  if (!trade.modifications) trade.modifications = [];
  trade.modifications.push({ nfts: trade.nfts, tokens: trade.tokens });

  alert('Trade modified successfully.');
}

function approveTrade(tradeId) {
  // Logic to approve a trade
  const trade = findTradeById(tradeId);
  if (!trade) return;

  // Final approval logic
  // Example: Send collateral to respective wallets
  sendCollateral(trade.nfts, trade.tokens);

  alert('Trade approved successfully.');
}

function findTradeById(tradeId) {
  // Example function to find a trade by ID
  const trades = [
    { id: 1, title: 'Trade 1', description: 'Description of Trade 1', nfts: [], tokens: [] },
    { id: 2, title: 'Trade 2', description: 'Description of Trade 2', nfts: [], tokens: [] }
  ];

  return trades.find(trade => trade.id === tradeId);
}

function sendCollateral(nfts, tokens) {
  // Example function to send collateral
  const adminWallet = 'admin-wallet-address';
  const treasuryWallet = 'treasury-wallet-address';
  const rewardPool = 'reward-pool-address';

  // Logic to send NFTs and tokens to respective wallets
  console.log(`Sending NFTs to ${adminWallet} and ${treasuryWallet}`);
  console.log(`Sending tokens to ${adminWallet} and ${treasuryWallet}`);
  console.log(`Sending 5% of fees to ${rewardPool}`);
}
