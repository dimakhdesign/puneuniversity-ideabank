import React, { useState } from 'react';
import Logo from "../Logo";
import { NavLink } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import './SiderbarLeft.css';

const handleToggleClick = () => {

    setShowSidebar(show => !show);
    console.log('Click')
  }



const SiderbarLeft = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggleClick = () => {
        setIsOpen(!isOpen)
        console.log('Click')
    }


    return (
            <div className={isOpen ? 'open' : 'closed'}>
                <div className="logo-wrapper flex items-center gap-8">
                    <div className="logo flex items-center">
                        <Logo />
                    <div className="name">Pune University Ayush<br /><span>IDEA BANK</span></div>
                </div>
                <div className="toggler" onClick={handleToggleClick}>
                    <HiOutlineBars3 className="text-xl cursor-pointer" />
                </div>
            </div>
            <ul className="sidebar-menu">
                {/* <li><NavLink to="/dashboard-student" end><img src={IconDashboard} /> Dashboard</NavLink></li>
                <li><NavLink to="research-submit" end><img src={IconSubmit} alt="" /> Submit Research</NavLink ></li>
                <li><NavLink to="discussion-forum" end><img src={IconForum} alt="" /> Q&A Forum</NavLink></li>
                <li><NavLink to="resources" end><img src={IconDocument} alt="" /> Documents & Resources </NavLink></li>
                <li><NavLink to="notifications" end><img src={IconNotification} alt="" /> Notifications</NavLink></li>
                <li><NavLink to="settings" end><img src={IconSettings} alt="" /> Settings & Profile</NavLink></li> */}
                {
                    menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink to={item.link} end><img src={item.icon} /> <span>{item.name}</span></NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SiderbarLeft
