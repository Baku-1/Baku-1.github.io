const Web3 = require('web3');
const web3 = new Web3(process.env.INFURA_URL);
const contractABI = require('./RoninP2PTradeAgreement.json'); // Assuming ABI is generated and available
const contractAddress = process.env.CONTRACT_ADDRESS;
const { getTopUsers, logTransaction } = require('./transactionService');

const batchTransfer = async (recipients, amounts) => {
  const contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
        const batchTransferTx = contract.methods.batchTransfer(recipients, amounts);
            const gas = await batchTransferTx.estimateGas({ from: process.env.ADMIN_WALLET });
                const gasPrice = await web3.eth.getGasPrice();

                    const tx = {
                          from: process.env.ADMIN_WALLET,
                                to: contractAddress,
                                      data: batchTransferTx.encodeABI(),
                                            gas,
                                                  gasPrice,
                                                      };

                                                          const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.ADMIN_PRIVATE_KEY);
                                                              const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

                                                                  console.log('Batch transfer successful:', receipt);

                                                                      // Log the transaction
                                                                          for (let i = 0; i < recipients.length; i++) {
                                                                                await logTransaction(recipients[i], amounts[i]);
                                                                                    }

                                                                                        return receipt;
                                                                                          } catch (error) {
                                                                                              console.error('Batch transfer failed:', error);
                                                                                                  throw new Error('Batch transfer failed');
                                                                                                    }
                                                                                                    };

                                                                                                    const distributeRewards = async () => {
                                                                                                      try {
                                                                                                          const topUsers = await getTopUsers();

                                                                                                              if (topUsers.length === 0) return;

                                                                                                                  const totalReward = (await web3.eth.getBalance(contractAddress)) * 0.05; // 5% of contract balance
                                                                                                                      let remainingReward = totalReward;

                                                                                                                          const rewards = topUsers.map((user, index) => {
                                                                                                                                const reward = remainingReward / (topUsers.length - index);
                                                                                                                                      remainingReward -= reward;
                                                                                                                                            return reward;
                                                                                                                                                });

                                                                                                                                                    await batchTransfer(
                                                                                                                                                          topUsers.map((user) => user.user),
                                                                                                                                                                rewards
                                                                                                                                                                    );
                                                                                                                                                                      } catch (error) {
                                                                                                                                                                          console.error('Failed to distribute rewards:', error);
                                                                                                                                                                              throw new Error('Failed to distribute rewards');
                                                                                                                                                                                }
                                                                                                                                                                                };

                                                                                                                                                                                module.exports = { batchTransfer, distributeRewards };