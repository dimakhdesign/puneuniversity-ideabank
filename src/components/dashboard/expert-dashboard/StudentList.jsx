import React from "react";
import WhiteBox from "../../../ui/WhiteBox/WhiteBox";

import { API_KEY } from '../../../config/apiConfig';
import { useAuth } from '../../../context/AuthContext';
import { useEffect, useState } from "react";


function StudentList() {

  const [studentData, setStudentData] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  
      const { authData } = useAuth();
      const userId = authData?.userId;
      const authToken = API_KEY;
      
      
      // console.log(authToken);
      
      useEffect(() => {
        const requestBody = {
          Authorization_key: authToken,
          userId: userId,
          AccessLevel: "Expert",
        };
        
        
        fetch('/api/GetAllSudent.php', {
          method: "POST",
          headers: {
            "Authorization": `${authToken}`,
            "Content-Type": "application/json",
          }
        })
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then(data => setData(data))
        .catch(err => setError(err.message));
        console.log(data);
        
      }, []);
  

  return (
    <div className="p-3 flex gap-3">
      {/* <WhiteBox>
        <div className="profile-summary mb-4">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </WhiteBox> */}
      <WhiteBox className="mb-3">
        <ul className="profile-summary mb-4">
          <li>Name of Student : <strong>Rajesh Shinde</strong></li>
          <li>Email ID : rajesh@gmail.com</li>
          <li>Mobile No : 9852145786</li>
        </ul>
        <a className="btn btn-primary" href="mailto:rajesh@gmail.com">Contact Via Email</a>
      </WhiteBox>
      <WhiteBox className="mb-3">
        <ul className="profile-summary mb-4">
          <li>Name of Student : <strong>Yogesh Patil</strong></li>
          <li>Email ID : yogesh@gmail.com</li>
          <li>Mobile No : 658745145</li>
        </ul>
        <a className="btn btn-primary" href="mailto:yogesh@gmail.com">Contact Via Email</a>
      </WhiteBox>
      <WhiteBox className="mb-3">
        <ul className="profile-summary mb-4">
          <li>Name of Student : <strong>Vjay Sawant</strong> </li>
          <li>Email ID : Vijay@gmail.com</li>
          <li>Mobile No : 5478569851</li>
        </ul>
        <a className="btn btn-primary" href="mailto:Vijay@gmail.com">Contact Via Email</a>
      </WhiteBox>
    </div>
  );
}

export default StudentList;
