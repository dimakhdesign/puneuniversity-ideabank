import Logo from "../Logo";
import './Header.css';
import SearchBar from "../../ui/SearchBar";
import UserProfileSettings from "../../ui/UserProfileSettings";
import NotificationBell from "../../ui/NotificationBell";
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
      {/* <div className="logo-wrapper flex items-center gap-8">
        <div className="logo flex items-center">
          <Logo />
          <div className="name">Pune University Ayush<br /><span>IDEA BANK</span></div>
        </div>
        <div className="toggler" onClick={handleToggleClick}>
          <HiOutlineBars3 className="text-xl cursor-pointer" />
        </div>
      </div> */}
      <div className="searchbar ms-8">
        <SearchBar />
      </div>
      <div className="panel-right flex gap-5 items-center ml-auto">
        <NotificationBell />
        <UserProfileSettings />
      </div>
    </div >
  )
}

export default Header
