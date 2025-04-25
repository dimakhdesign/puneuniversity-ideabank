import Logo from "../Logo/Logo";
import './Header.css';
import SearchBar from "../SearchBar/SearchBar";
import UserProfileSettings from "../Profile/UserProfileSettings";
import NotificationBell from "../Notifications/NotificationBell";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {


  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleClick = () => {
    setShowSidebar(show => !show);
    console.log('Click')
  }

  return (
    <div className='p-3 flex items-start bg-white'>
      {/* <div className="searchbar ms-8">
        <SearchBar />
      </div> */}
      <div className="panel-right flex gap-5 items-center ml-auto">
        <NotificationBell />
        <UserProfileSettings />
      </div>
    </div >
  )
}

export default Header
