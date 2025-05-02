import React, { useState } from 'react';
import Logo from "../Logo/Logo";
import { NavLink } from 'react-router-dom';
import { MdFormatIndentDecrease, MdFormatIndentIncrease } from "react-icons/md";
import './SiderbarLeft.css';

const SiderbarLeft = ({ menuItems }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={isOpen ? 'open' : 'closed'}>
            <div className="logo-wrapper flex items-center gap-8 pt-3">
                <div className="logo flex items-center">
                    <Logo />
                    <div className="name">University Of Pune<br /><span>IDEA BANK</span></div>
                </div>
                <div className="toggler cursor-pointer" onClick={handleToggleClick}>
                    {isOpen ? (
                        <MdFormatIndentDecrease className="text-xl" />
                    ) : (
                        <MdFormatIndentIncrease className="text-xl" />
                    )}
                </div>
            </div>
            <ul className="sidebar-menu">
                {
                    menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.link} end><img src={item.icon} /> <span>{item.name}</span></NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SiderbarLeft
