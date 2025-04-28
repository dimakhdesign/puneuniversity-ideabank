import Header from '../ui/Header/Header';
import SiderbarLeft from '../ui/SidebarLeft/SiderbarLeft';
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
    // { name: "Documents & Resources", icon: IconDocument, link: "resources" },
    { name: "Notifications", icon: IconNotification, link: "notifications" },
    { name: "Settings & Profile", icon: IconSettings, link: "settings" },
];

const StudentDashboardLayout = () => {
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
    )
}

export default StudentDashboardLayout
