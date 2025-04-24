import { useContext } from "react";
import { UserContext } from '../../context/UserContext';

import WhiteBox from "../../ui/WhiteBox";

const Settings = () => {

    const { currentUser } = useContext(UserContext); // Access user data from context

    return (
        <>
            <WhiteBox>
                <p>1. Profile Information</p><br />
                <ul>
                    <li>Name: {currentUser.name}</li>
                    <li>Email: {currentUser.email}</li>
                    <li>College Name: {currentUser.college_name}</li>
                    <li>Date of Birth: {currentUser.dob}</li>
                    <li>Student Type: {currentUser.student_type}</li>
                </ul>
            </WhiteBox>

            <WhiteBox className="mt-3">
                <p>2. Security</p><br />
                <ul>
                    <li>Password: {currentUser.pass}</li>
                </ul>
            </WhiteBox>

        </>
    )
}

export default Settings
