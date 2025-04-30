import React from "react";
import { useLocation } from "react-router-dom";

import FormHeader from "../components/auth/FormHeader";
import StudentRegistrationFormContent from "../components/auth/Registration/StudentRegistrationFormContent";
import ExpertRegistrationFormContent from "../components/auth/Registration/ExpertRegistrationFormContent";

const Register = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <FormHeader />
      <main className="form-main-wrapper flex justify-center pb-8">
        {path.includes("/student-register") && (
          <StudentRegistrationFormContent />
        )}
        {path.includes("/expert-register") && <ExpertRegistrationFormContent />}
      </main>
    </>
  );
};

export default Register;
