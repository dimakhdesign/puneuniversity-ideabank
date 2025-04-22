import WhiteBox from '../../ui/WhiteBox';
import AssignmentList from '../../ui/AssignmentsList/AssignmentList';
import Link from '../../ui/Link/Link';
import InfoWithIcon from '../../ui/InfoWithIcon/InfoWithIcon';

import IconProfessor from '../../assets/icon-professor.svg';
import IconAnnouncement from '../../assets/icon-announcement.svg';

import ImgDeadline from '../../assets/img-deadline.svg';

import './SidebarRight.css';



const SidebarRight = () => {
    return (
        <div>
            <WhiteBox>
                <InfoWithIcon icon={IconProfessor} title="Assigned Professor Details" subtitle="Prof. Ashok More" />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <InfoWithIcon icon={IconAnnouncement} title="Important Announcements" subtitle="Online Seminar" />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <div className="deadlines-box-wrapper">
                    <h2 className="section-heading">Upcoming Deadlines & Reminders</h2>
                    <div className="image-box rounded-sm border border-stone-300 mt-4 p-1">
                        <img src={ImgDeadline} alt="" className='mx-auto' />
                    </div>
                    <AssignmentList />
                    <Link text="View All" />
                </div>
            </WhiteBox>
        </div>
    )
}

export default SidebarRight
