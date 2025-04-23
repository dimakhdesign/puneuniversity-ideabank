import React from "react";
import Header from "../Header";
import SiderbarLeft from "../SiderbarLeft";
import "../SiderbarLeft.css";

import { Outlet } from 'react-router-dom';

import IconDashboard from '../../../assets/icon-dashboard.svg'
import IconSubmit from '../../../assets/icon-submit.svg'
import IconForum from '../../../assets/icon-forum.svg'
import IconDocument from '../../../assets/icon-document.svg'
import IconNotification from '../../../assets/icon-bell.svg'
import IconSettings from '../../../assets/icon-settings.svg'



const menuItems = [
  { name: "Dashboard", icon: IconDashboard, link: "/dashboard-student" },
  { name: "Submit Research", icon: IconSubmit, link: "/research-submit" },
  { name: "Q&A Forum", icon: IconForum, link: "/discussion-forum" },
];

function ExpertDashboard() {
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
  );
}

export default ExpertDashboard;
