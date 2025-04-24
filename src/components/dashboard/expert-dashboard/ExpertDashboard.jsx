import React from "react";
import Header from "../Header";
import SiderbarLeft from "../../../ui/SidebarLeft/SiderbarLeft";

import { Outlet } from 'react-router-dom';

import IconSubmit from '../../../assets/icon-submit.svg'

const menuItems = [
  { name: "Student List", icon: IconSubmit, link: "/research-submit" },
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
