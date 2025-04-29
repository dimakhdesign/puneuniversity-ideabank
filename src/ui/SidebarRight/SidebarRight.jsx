import { API_KEY } from "../../config/apiConfig";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

import WhiteBox from '../WhiteBox/WhiteBox';
import InfoWithIcon from '../InfoWithIcon/InfoWithIcon';

import IconProfessor from '../../assets/icon-professor.svg';
import IconAnnouncement from '../../assets/icon-announcement.svg';

import './SidebarRight.css';

const SidebarRight = () => {

    const [studentData, setStudentData] = useState(null);

    const { authData } = useAuth();  // Get authData from context
    const userId = authData?.userId;

    // API Call to fetch the student data
    useEffect(() => {
        if (!userId) return;

        const getStudentData = async () => {
            try {
                const response = await fetch('/api/profileUser.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Authorization_key: API_KEY,
                        AccessLevel: "Student"
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                // console.log(result);

                // Check if the response contains the 'field_array'
                if (result.Response && result.field_array) {
                    // Destructure data from the 'field_array'
                    const { expert_name } = result.field_array;

                    // Update the state with student data
                    setStudentData({
                        expert_name,
                    });
                } else {
                    console.error(result.msg || 'Failed to fetch student data');
                }
            } catch (error) {
                console.error('Get User error:', error);
            }
        };

        getStudentData();
    }, [userId]);  // Re-run the effect when studentId changes

    // API Call to fetch the announcement
    // useEffect(() => {

    //     const getAnnouncements = async () => {
    //         try {
    //             const response = await fetch('/api/getAnnouncement.php', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     Authorization_key: API_KEY,
    //                     student_id: studentId,
    //                 }),
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }

    //             const result = await response.json();
    //             // console.log(result);

    //         } catch (error) {
    //             console.error('Get User error:', error);
    //         }
    //     };

    //     getAnnouncements();
    // }, [userId]);  // Re-run the effect when studentId changes

    return (
        <div>
            <WhiteBox>
                <InfoWithIcon
                    icon={IconProfessor}
                    title="Assigned Professor Details"
                    subtitle={studentData ? studentData.expert_name : "Loading..."}
                />
            </WhiteBox>

            <WhiteBox className='mt-5'>
                <InfoWithIcon
                    icon={IconAnnouncement}
                    title="Important Announcements"
                    subtitle="There are no updates or announcements at the moment."
                />
            </WhiteBox>
        </div>
    );
}

export default SidebarRight;
