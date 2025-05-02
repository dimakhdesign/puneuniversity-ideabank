import React from 'react';
import SiderbarLeft from "../ui/SidebarLeft/SiderbarLeft";
import Header from '../ui/Header/Header';

import { Outlet } from 'react-router-dom';

import IconSubmit from '../assets/icon-submit.svg';
import IconNotification from '../assets/icon-bell.svg';
import IconSettings from '../assets/icon-settings.svg';

const menuItems = [
  { name: "Expert Dashboard", icon: IconSubmit, link: "" },
  { name: "Notification", icon: IconNotification, link: "notification" },
  { name: "Setting & Profile", icon: IconSettings, link: "expert-setting" },
  // { name: "Log Out", icon: IconSettings, link: "setting" },
];


function ExpertDashboardLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <div className="grid grid-cols-[22%_1fr] h-full">
        <SiderbarLeft className="bg-gray-200 p-4" menuItems={menuItems} />
        <main className="bg-[#EEF2F6] h-screen">
          <Header className="row-span-1 w-full bg-white-800 text-white p-4" />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ExpertDashboardLayout
