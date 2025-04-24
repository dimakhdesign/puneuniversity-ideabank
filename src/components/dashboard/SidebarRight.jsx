import { useContext } from "react";
import { UserContext } from '../../context/UserContext';

import WhiteBox from '../../ui/WhiteBox';
import AssignmentList from '../../ui/AssignmentsList/AssignmentList';
import Link from '../../ui/Link/Link';
import InfoWithIcon from '../../ui/InfoWithIcon/InfoWithIcon';

import IconProfessor from '../../assets/icon-professor.svg';
import IconAnnouncement from '../../assets/icon-announcement.svg';

import ImgDeadline from '../../assets/img-deadline.svg';

import './SidebarRight.css';

const SidebarRight = () => {

    const { currentUser } = useContext(UserContext); // Access user data from context

    const deadlines = () => [];

    return (
        <div>
            <WhiteBox>
                <InfoWithIcon icon={IconProfessor} title="Assigned Professor Details" subtitle={currentUser.expert_name} />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <InfoWithIcon icon={IconAnnouncement} title="Important Announcements" subtitle="There are no updates or announcements at the moment." />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <div className="deadlines-box-wrapper">
                    <h2 className="section-heading">Upcoming Deadlines & Reminders</h2>
                    <div className="image-box rounded-sm border border-stone-300 mt-4 p-1">
                        <img src={ImgDeadline} alt="" className='mx-auto' />
                    </div>
                    {deadlines.length >= 1 ? (
                        <>
                            <AssignmentList />
                            <Link text="View All" />
                        </>
                    ) : (<p className="mt-3">No upcoming deadlines or reminders.</p>)}

                </div>
            </WhiteBox>
        </div>
    )
}

export default SidebarRight
