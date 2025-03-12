// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RoninP2POffer {
    struct OfferDetails {
            address offerer;
                    uint256 agreementId;
                            address[] nfts;
                                    uint256 modificationCount;
                                            bool isActive;
                                                }

                                                    mapping(uint256 => OfferDetails) public offers;
                                                        uint256 public offerCounter;

                                                            event OfferMade(uint256 offerId, address offerer, uint256 agreementId);
                                                                event OfferModified(uint256 offerId, address modifiers);
                                                                    event OfferAccepted(uint256 offerId, address accepter);
                                                                        event OfferRejected(uint256 offerId, address rejecter);

                                                                            function makeOffer(uint256 agreementId, address[] memory nfts) public {
                                                                                    require(nfts.length <= 5, "Maximum 5 NFTs allowed");

                                                                                            OfferDetails memory newOffer = OfferDetails({
                                                                                                        offerer: msg.sender,
                                                                                                                    agreementId: agreementId,
                                                                                                                                nfts: nfts,
                                                                                                                                            modificationCount: 0,
                                                                                                                                                        isActive: true
                                                                                                                                                                });

                                                                                                                                                                        offers[offerCounter] = newOffer;
                                                                                                                                                                                emit OfferMade(offerCounter, msg.sender, agreementId);
                                                                                                                                                                                        offerCounter++;
                                                                                                                                                                                            }

                                                                                                                                                                                                function viewOffer(uint256 offerId) public view returns (OfferDetails memory) {
                                                                                                                                                                                                        return offers[offerId];
                                                                                                                                                                                                            }

                                                                                                                                                                                                                function modifyOffer(uint256 offerId, address[] memory newNfts) public {
                                                                                                                                                                                                                        OfferDetails storage offer = offers[offerId];
                                                                                                                                                                                                                                require(msg.sender == offer.offerer, "Only offerer can modify");
                                                                                                                                                                                                                                        require(offer.modificationCount < 3, "Modification limit reached");
                                                                                                                                                                                                                                                require(newNfts.length <= 5, "Maximum 5 NFTs allowed");

                                                                                                                                                                                                                                                        offer.nfts = newNfts;
                                                                                                                                                                                                                                                                offer.modificationCount++;
                                                                                                                                                                                                                                                                        emit OfferModified(offerId, msg.sender);
                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                function acceptOffer(uint256 offerId) public {
                                                                                                                                                                                                                                                                                        OfferDetails storage offer = offers[offerId];
                                                                                                                                                                                                                                                                                                require(offer.isActive, "Offer is not active");

                                                                                                                                                                                                                                                                                                        offer.isActive = false;
                                                                                                                                                                                                                                                                                                                emit OfferAccepted(offerId, msg.sender);
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                        function rejectOffer(uint256 offerId) public {
                                                                                                                                                                                                                                                                                                                                OfferDetails storage offer = offers[offerId];
                                                                                                                                                                                                                                                                                                                                        require(offer.isActive, "Offer is not active");

                                                                                                                                                                                                                                                                                                                                                offer.isActive = false;
                                                                                                                                                                                                                                                                                                                                                        emit OfferRejected(offerId, msg.sender);
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                            }