import { useState } from 'react';
import './UserProfileSettings.css';
import IconUser from '../../assets/user-image.svg';
import { HiOutlineCog6Tooth, HiMiniUserCircle } from "react-icons/hi2";

const UserProfileSettings = ({ handleClick }) => {

    const [showSettingMenu, setShowSettingMenu] = useState(false);

    const handleSettingsClick = () => {
        setShowSettingMenu(visible => !visible);
    }

    return (
        <>
            <div className="user-profile-setting relative flex items-center gap-2 cursor-pointer" onClick={handleSettingsClick}>
                <HiMiniUserCircle className='icon-user text-4xl' />
                <HiOutlineCog6Tooth className='setting-icon text-2xl' onClick={handleClick} />

                {showSettingMenu && (
                    <div className="setting-menu absolute top-[100%] left-0 bg-white w-full p-3 rounded-md">
                        <ul>
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                )}
            </div>



        </>
    )
}

export default UserProfileSettings
