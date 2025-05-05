import React from "react";
import WhiteBox from "../../../ui/WhiteBox/WhiteBox";
import { API_KEY } from "../../../config/apiConfig";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import "./ExpertDashboard.css";

function StudentList() {
  const { authData } = useAuth(); // Get authData from context
  const userId = authData?.userId;

  const [expertInfo, setExpertInfo] = useState([]);

  useEffect(() => {
    if (!userId) return;
    const getExpertData = async () => {
      try {
        // const response = await fetch('https://design3.dcpl.co.in/AyushCOE/APIs/GetAllSudent.php', {
        const response = await fetch("/api/GetAllSudent.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Authorization_key: API_KEY,
            user_id: userId,
            AccessLevel: "Expert",
          }),
        });

        if (!response.ok) throw new Error("Failed to display details.");

        const result = await response.json();

        setExpertInfo(result.field_array);

        console.log("Details fetched", result.field_array);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getExpertData();
    console.log(expertInfo);
  }, [userId]);

  return (
    <div className="gap-3">
      {expertInfo?.map((items) => (        
        <WhiteBox className="mb-3 student-data-list" key={items.id}>
        <ul className="profile-summary mb-4">
          <li>
            Name of Student : <strong>{items.name}</strong>
          </li>
          <li>Email ID : {items.email}</li>
          <li>Mobile No : 9852145786</li>
        </ul>
        <a className="btn btn-primary" href={`mailto:${items.email}`}>
          Contact Via Email
        </a>
      </WhiteBox>
      
      ))}
    </div>
  );
}

export default StudentList;
