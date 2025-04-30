import './NotificationBell.css';
import { HiOutlineBellAlert } from 'react-icons/hi2';

const NotificationBell = () => {
    return (
        <div className="notification-box relative">
            <HiOutlineBellAlert className='text-lg' />
            <div className="badge-count absolute top-[-12px] right-[-5px] rounded-full flex justify-center items-center">
                0
            </div>
        </div>
    )
}

export default NotificationBell
