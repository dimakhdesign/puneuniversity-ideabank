import React from "react";
import WhiteBox from "../../../ui/WhiteBox/WhiteBox";

import { API_KEY } from '../../../config/apiConfig';
import { useAuth } from '../../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

function StudentList() {

  const [studentData, setStudentData] = useState(null);
  
      const { authData } = useAuth();
      const userId = authData?.userId;
      // const navigate = useNavigate();
  
      // console.log(authData);
  

  return (
    <div className="p-3">
      <WhiteBox>
        <div className="profile-summary">
          <p>
            Welcome to our platform, <br />{" "}
            <strong>{userId}</strong> Here’s a quick overview of
            what you can expect.{" "}
          </p>
          <div className="profile-cpmpletion-status flex gap-3 items-center mt-3">
            <p>Your profile is 50% completed.</p>
          </div>
        </div>
      </WhiteBox>
    </div>
  );
}

export default StudentList;
