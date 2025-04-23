import React from 'react';
import NotificationItem from '../../ui/Notifications/NotificationItem';
import { p } from 'framer-motion/client';

const notifications = [
    // { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '5', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
];

const Notifications = ({ notifications = [] }) => {
    return (
        <div>
            {notifications.length > 0 ? (
                notifications.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                ))
            ) : (
                <p>Currently there are no new notifications.</p>
            )}
        </div>
    );
};

export default Notifications;
