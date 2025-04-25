import { useContext } from "react";
import { UserContext } from '../../../context/UserContext';

import WhiteBox from '../../../ui/WhiteBox/WhiteBox';
import AssignmentList from '../../../ui/AssignmentsList/AssignmentList';
import Link from '../../../ui/Link/Link';
import InfoWithIcon from '../../../ui/InfoWithIcon/InfoWithIcon';

import IconProfessor from '../../../assets/icon-professor.svg';
import IconAnnouncement from '../../../assets/icon-announcement.svg';

import ImgDeadline from '../../../assets/img-deadline.svg';

// import './SidebarRight.css';

const AdminSidebarRight = () => {

    const { currentUser } = useContext(UserContext); // Access user data from context

    const deadlines = () => [];

    return (
        <div>
            <WhiteBox>
                <InfoWithIcon icon={IconProfessor} title="Students Awaiting Expert Assignment" />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <InfoWithIcon icon={IconAnnouncement} title="Recent Approvals /Rejections" />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <InfoWithIcon icon={IconProfessor} title="Submission Stats" />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <InfoWithIcon icon={IconAnnouncement} title="Reminders & Deadlines" />
            </WhiteBox>
        </div>
    )
}

export default AdminSidebarRight
