// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RoninP2PFeeAndRewardDistribution {
    address public adminWallet;
        address public treasuryManagerWallet;
            uint256 public rewardPool;
                uint256 public threshold = 0.05 ether;

                    event FeesDistributed(uint256 agreementId, uint256 adminFee, uint256 treasuryFee, uint256 rewardPoolFee);
                        event RewardsDistributed(address[] topUsers, uint256[] rewards);

                            constructor(address _adminWallet, address _treasuryManagerWallet) {
                                    adminWallet = _adminWallet;
                                            treasuryManagerWallet = _treasuryManagerWallet;
                                                }

                                                    function calculateFees(uint256 floorValue, uint8 rarity) public pure returns (uint256) {
                                                            uint256 feePercentage;
                                                                    if (rarity == 1) {
                                                                                feePercentage = 1;
                                                                                        } else if (rarity == 2) {
                                                                                                    feePercentage = 2;
                                                                                                            } else if (rarity == 3) {
                                                                                                                        feePercentage = 3;
                                                                                                                                } else if (rarity == 4) {
                                                                                                                                            feePercentage = 4;
                                                                                                                                                    } else {
                                                                                                                                                                feePercentage = 5;
                                                                                                                                                                        }
                                                                                                                                                                                return (floorValue * feePercentage) / 100;
                                                                                                                                                                                    }

                                                                                                                                                                                        function distributeFees(uint256 agreementId, uint256 floorValue, uint8 rarity) public {
                                                                                                                                                                                                uint256 fee = calculateFees(floorValue, rarity);
                                                                                                                                                                                                        uint256 adminFee = (fee * 475) / 1000;
                                                                                                                                                                                                                uint256 treasuryFee = (fee * 475) / 1000;
                                                                                                                                                                                                                        uint256 rewardPoolFee = (fee * 50) / 1000;

                                                                                                                                                                                                                                payable(adminWallet).transfer(adminFee);
                                                                                                                                                                                                                                        payable(treasuryManagerWallet).transfer(treasuryFee);
                                                                                                                                                                                                                                                rewardPool += rewardPoolFee;

                                                                                                                                                                                                                                                        emit FeesDistributed(agreementId, adminFee, treasuryFee, rewardPoolFee);
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                function distributeRewards(address[] memory topUsers, uint256[] memory rewards) public {
                                                                                                                                                                                                                                                                        require(rewardPool >= threshold, "Reward pool threshold not met");
                                                                                                                                                                                                                                                                                require(topUsers.length == rewards.length, "Mismatched users and rewards length");
                                                                                                                                                                                                                                                                                        for (uint256 i = 0; i < topUsers.length; i++) {
                                                                                                                                                                                                                                                                                                    payable(topUsers[i]).transfer(rewards[i]);
                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                    rewardPool -= threshold;
                                                                                                                                                                                                                                                                                                                            emit RewardsDistributed(topUsers, rewards);
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                }