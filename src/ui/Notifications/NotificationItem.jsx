import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ notification }) => {
    return (
        <div className='bg-[#ede7f6] p-3 rounded-md mb-4'>{notification.text}</div>
    );
};

NotificationItem.propTypes = {
    notification: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};

export default NotificationItem;
