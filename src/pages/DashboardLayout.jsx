import Header from '../components/dashboard/Header';
import SiderbarLeft from '../components/dashboard/SiderbarLeft';

import { Outlet } from 'react-router-dom';

import IconDashboard from '../assets/icon-dashboard.svg'
import IconSubmit from '../assets/icon-submit.svg'
import IconForum from '../assets/icon-forum.svg'
import IconDocument from '../assets/icon-document.svg'
import IconNotification from '../assets/icon-bell.svg'
import IconSettings from '../assets/icon-settings.svg'



const menuItems = [
  { name: "Dashboard", icon: IconDashboard, link: "/dashboard-student" },
  { name: "Submit Research", icon: IconSubmit, link: "research-submit" },
  { name: "Q&A Forum", icon: IconForum, link: "discussion-forum" },
  { name: "Documents & Resources", icon: IconDocument, link: "discussion-forum" },
  { name: "Notifications", icon: IconNotification, link: "resources" },
  { name: "Settings & Profile", icon: IconSettings, link: "notifications" },
];



const DashboardLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr] h-screen">
            <Header className="row-span-1 w-full bg-gray-800 text-white p-4" />
            <div className="grid grid-cols-[22%_1fr] h-full">
                <SiderbarLeft className="bg-gray-200 p-4" menuItems={menuItems} />
                <main className="p-5 bg-[#EEF2F6]">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
