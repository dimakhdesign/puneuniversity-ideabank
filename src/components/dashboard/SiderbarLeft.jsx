import { NavLink } from 'react-router-dom'
import './SiderbarLeft.css';

import IconDashboard from '../../assets/icon-dashboard.svg'
import IconSubmit from '../../assets/icon-submit.svg'
import IconForum from '../../assets/icon-forum.svg'
import IconDocument from '../../assets/icon-document.svg'
import IconNotification from '../../assets/icon-bell.svg'
import IconSettings from '../../assets/icon-settings.svg'

const SiderbarLeft = () => {
    return (
        <div className='p-5'>
            <ul className='sidebar-menu'>
                <li><NavLink to="/dashboard-student" end><img src={IconDashboard} /> Dashboard
                </NavLink></li>
                <li><NavLink to="research-submit" end><img src={IconSubmit} alt="" /> Submit Research</NavLink ></li>
                <li><NavLink to="discussion-forum" end><img src={IconForum} alt="" /> Q&A Forum</NavLink></li>
                <li><NavLink to="resources" end><img src={IconDocument} alt="" /> Documents & Resources </NavLink></li>
                <li><NavLink to="notifications" end><img src={IconNotification} alt="" /> Notifications</NavLink></li>
                <li><NavLink to="settings" end><img src={IconSettings} alt="" /> Settings & Profile</NavLink></li>
            </ul>
        </div>
    )
}

export default SiderbarLeft
