import React from "react";
import WhiteBox from "../../../ui/WhiteBox";
import UserImage from '../../../assets/user-profile-image.svg';

function StudentList() {
  return (
    <div>
      <WhiteBox>
        <div className="profile-summary">
          <p>Welcome to our platform, <br /> <strong>Rajesh Shinde !</strong> Here’s a quick overview of  what you can expect. </p>
          <div className="profile-cpmpletion-status flex gap-3 items-center mt-3">
            <p>Your profile is 50% completed.</p>
          </div>
        </div>
      </WhiteBox>
    </div>
  );
}

export default StudentList;
