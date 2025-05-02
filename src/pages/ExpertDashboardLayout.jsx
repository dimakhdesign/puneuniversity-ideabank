import React from "react";
import Header from "../ui/Header/Header";

import { Outlet } from "react-router-dom";

import IconSubmit from "../assets/icon-submit.svg";
import IconNotification from "../assets/icon-bell.svg";
import IconSettings from "../assets/icon-settings.svg";
import SiderbarLeft from "../ui/SidebarLeft/SiderbarLeft";

const menuItems = [
  { name: "Expert Dashboard", icon: IconSubmit, link: "" },
  { name: "Notification", icon: IconNotification, link: "expert-notification" },
  { name: "Setting & Profile", icon: IconSettings, link: "expert-setting" },
  // { name: "Log Out", icon: IconSettings, link: "setting" },
];

function ExpertDashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SiderbarLeft className="w-[22%] bg-gray-200 p-4" menuItems={menuItems} />

      {/* Right side: Header on top, Main below */}
      <div className="flex flex-col flex-1">
        <Header className="bg-gray-800 text-white p-4" />
        <main className="flex-1 p-5 bg-[#EEF2F6] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ExpertDashboardLayout;
