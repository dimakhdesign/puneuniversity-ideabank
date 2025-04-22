import StudentRegistrationForm from "./StudentRegistrationForm";
import LoginImage from "../LoginImage";

const RegistrationFormContent = () => {
  return (
    <div className="main-inner-wrapper flex items-stretch gap-2">
      <div className="image">
      <LoginImage/>
      </div>
      <div className="form-wrapper w-96 px-[40px] py-[30px] bg-white rounded-md">
        <div className="header">
          <h2>Idea Bank</h2>
          <h3>Student Registration</h3>
        </div>
        <StudentRegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationFormContent;
