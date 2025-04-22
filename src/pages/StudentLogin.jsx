import FormHeader from "../components/auth/FormHeader";
import StudentLoginFormContent from "../components/auth/StudentLoginFormContent";

import "./Login.css";

const StudentLogin = () => {
  return (
    <>
      <FormHeader />
      <main className="form-main-wrapper flex justify-center pb-8">
        <StudentLoginFormContent />
      </main>
    </>
  );
};

export default StudentLogin;
