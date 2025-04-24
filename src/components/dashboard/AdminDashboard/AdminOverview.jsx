import { useNavigate } from "react-router-dom";
import WhiteBox from "../../../ui/WhiteBox";
import AdminSidebarRight from "../../dashboard/AdminDashboard/AdminSidebarRight";
import Button from "../../../ui/Button/Button";
import Link from "../../../ui/Link/Link";

import IconChart from "../../../assets/icon-chart.svg"
import IconProgress from '../../../assets/icon-progress.svg';

import './AdminOverview.css';

const AdminOverview = () => {

    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-[65%_35%] gap-4">
            <div className='ml-2 h-screen'>

                <WhiteBox className='profile-box flex gap-3'>
                    <div className="profile-summary">
                        <p>Welcome back, <strong>Admin<br />Harshad Patil </strong></p>
                    </div>
                </WhiteBox>

                <WhiteBox className='mt-3'>
                    <h2 className="section-heading">Top Metrics Overview</h2>

                    <div className="metrics-box-wrapper grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                        <div className="box blue flex gap-3">
                            <div className="icon">
                                <img src={IconChart} alt="" />
                            </div>
                            <div className="metrics flex flex-col justify-between">
                                <h4>120</h4>
                                <p>Total Submission</p>
                            </div>
                        </div>
                        <div className="box white flex gap-3">
                            <div className="icon">
                                <img src={IconProgress} alt="" />
                            </div>
                            <div className="metrics flex flex-col justify-between">
                                <h4>50</h4>
                                <p>Approved</p>
                            </div>
                        </div>
                        <div className="box blue flex gap-3">
                            <div className="icon">
                                <img src={IconChart} alt="" />
                            </div>
                            <div className="metrics flex flex-col justify-between">
                                <h4>30</h4>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className="box white flex gap-3">
                            <div className="icon">
                                <img src={IconProgress} alt="" />
                            </div>
                            <div className="metrics flex flex-col justify-between">
                                <h4>40</h4>
                                <p>Rejected</p>
                            </div>
                        </div>
                    </div>
                </WhiteBox>

                <div className="buttons-wrapper flex gap-3 my-5">
                    <Button text="Review New Submissions" className="!w-auto" onClick={() => navigate('/dashboard-admin/submissions')} />
                    <Button text="Assign Experts" className="!w-auto" onClick={() => navigate('/dashboard-admin/expert-management')} />
                    <Button text="Manage Final Documents" className="!w-auto" onClick={() => navigate('/dashboard-admin/documents-repository')} />
                    <Button text="Moderate Q&A" className="!w-auto" onClick={() => navigate('/dashboard-admin/discussion-forum')} />
                </div>

                <WhiteBox className="mt-3">
                    <h2 className="section-heading">Recent Activity Log</h2>
                    <ul className="list-recent-activities mt-5">
                        <li>“Submission by Rahul Y – Awaiting Review”</li>
                        <li>“Dr. Shastri assigned to Ayush Sharma”</li>
                        <li>“Rejected: Final doc from Ravi – File incomplete”</li>
                    </ul>
                    <div className="flex justify-end">
                        <Link text="View All" />
                    </div>
                </WhiteBox>

            </div>

            <aside className='mr-5 h-screen'>
                <AdminSidebarRight />
            </aside>
        </div>
    )
}

export default AdminOverview;
