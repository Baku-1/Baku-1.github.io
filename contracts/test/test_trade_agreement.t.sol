// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../src/RoninP2PTradeAgreement.sol";
import "../src/RoninP2POffer.sol";
import "../src/RoninP2PFeeAndRewardDistribution.sol";

contract TestTradeAgreement is Test {
    RoninP2PTradeAgreement tradeAgreement;
        RoninP2POffer offer;
            RoninP2PFeeAndRewardDistribution feeAndRewardDistribution;

                address admin = address(0x1);
                    address treasuryManager = address(0x2);

                        function setUp() public {
                                feeAndRewardDistribution = new RoninP2PFeeAndRewardDistribution(admin, treasuryManager);
                                        offer = new RoninP2POffer();
                                                tradeAgreement = new RoninP2PTradeAgreement(address(offer), address(feeAndRewardDistribution));
                                                    }

                                                        function testCreateTradeAgreement() public {
                                                                address[] memory nfts = new address[](1);
                                                                        nfts[0] = address(0x3);
                                                                                tradeAgreement.createTradeAgreement(nfts);
                                                                                        (address creator, address[] memory tradeNfts, uint256 modificationCount, bool isActive) = tradeAgreement.viewTradeAgreement(0);

                                                                                                assertEq(creator, address(this));
                                                                                                        assertEq(tradeNfts[0], address(0x3));
                                                                                                                assertEq(modificationCount, 0);
                                                                                                                        assertEq(isActive, true);
                                                                                                                            }

                                                                                                                                // Add more tests as needed
                                                                                                                                }