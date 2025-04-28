import { useState } from 'react';
import './UserProfileSettings.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HiOutlineCog6Tooth, HiMiniUserCircle } from "react-icons/hi2";

import { useAuth } from "../../context/AuthContext";

const UserProfileSettings = ({ handleClick }) => {

    const [showSettingMenu, setShowSettingMenu] = useState(false);

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleSettingsClick = () => {
        setShowSettingMenu(visible => !visible);
    }

    // Logout user
    const handleLogout = () => {
        logout();
        navigate("/student-login");
    };

    return (
        <>
            <div className="user-profile-setting relative flex items-center gap-2 cursor-pointer" onClick={handleSettingsClick}>
                <HiMiniUserCircle className='icon-user text-4xl' />
                <HiOutlineCog6Tooth className='setting-icon text-2xl' onClick={handleClick} />

                {showSettingMenu && (
                    <div className="setting-menu absolute top-[100%] left-0 bg-white w-full p-3 rounded-md">
                        <ul>
                            <li><NavLink to='/dashboard-student/settings'>Profile</NavLink></li>
                            <li>
                                <button onClick={handleLogout} className="text-red-600 cursor-pointer">Logout</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserProfileSettings
