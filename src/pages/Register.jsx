import React from "react";
import { useLocation } from "react-router-dom";
import "./login.css";
import StudentRegistrationFormContent from "../components/auth/Registration/StudentRegistrationFormContent";
import ExpertRegistrationFormContent from "../components/auth/Registration/ExpertRegistrationFormContent";

const Register = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
<<<<<<< HEAD
      <main className="form-main-wrapper flex justify-center items-center">
=======
      <main className="form-main-wrapper flex justify-center items-center registration">
>>>>>>> 7feda68569d8af4df5001b71ed95a589157e9e1d
        {path.includes("/student-register") && (
          <StudentRegistrationFormContent />
        )}
        {path.includes("/expert-register") && <ExpertRegistrationFormContent />}
      </main>
    </>
  );
};

export default Register;
