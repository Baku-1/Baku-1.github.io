import React from 'react';
import PropTypes from 'prop-types';

const TradeCard = ({ trade }) => {
  return (
      <div className="col-md-4">
            <div className="card mb-4">
                    <img
                              src="https://via.placeholder.com/150"
                                        className="card-img-top"
                                                  alt={trade.name}
                                                          />
                                                                  <div className="card-body">
                                                                            <h5 className="card-title">{trade.name}</h5>
                                                                                      <p className="card-text">{trade.description}</p>
                                                                                                <button className="btn btn-primary">View Details</button>
                                                                                                        </div>
                                                                                                              </div>
                                                                                                                  </div>
                                                                                                                    );
                                                                                                                    };

                                                                                                                    TradeCard.propTypes = {
                                                                                                                      trade: PropTypes.shape({
                                                                                                                          name: PropTypes.string.isRequired,
                                                                                                                              description: PropTypes.string.isRequired,
                                                                                                                                }).isRequired,
                                                                                                                                };

                                                                                                                                export default TradeCard;
