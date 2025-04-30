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
    <div className="p-3">
      <WhiteBox>
        <div className="profile-summary">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </WhiteBox>
    </div>
  );
}

export default StudentList;
