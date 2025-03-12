import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ notification }) => {
  return (
      <div className="alert alert-info" role="alert">
            {notification.message}
                </div>
                  );
                  };

                  Notification.propTypes = {
                    notification: PropTypes.shape({
                        message: PropTypes.string.isRequired,
                          }).isRequired,
                          };

                          export default Notification;