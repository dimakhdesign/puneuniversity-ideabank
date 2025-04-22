import Header from '../components/dashboard/Header';
import SiderbarLeft from '../components/dashboard/SiderbarLeft';

import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr] h-screen">
            <Header className="row-span-1 w-full bg-gray-800 text-white p-4" />
            <div className="grid grid-cols-[22%_1fr] h-full">
                <SiderbarLeft className="bg-gray-200 p-4" />
                <main className="p-5 bg-[#EEF2F6]">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
