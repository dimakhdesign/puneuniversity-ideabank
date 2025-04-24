import NotificationItem from '../../../ui/Notifications/NotificationItem';

const notifications = [
    // { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    // { id: '5', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
];

const AdminNotifications = () => {
    return (
        <div>
            {notifications.length > 0 ? (
                notifications.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                ))
            ) : (
                <p>No new notifications at the moment.</p>
            )}
        </div>
    );
}

export default AdminNotifications
