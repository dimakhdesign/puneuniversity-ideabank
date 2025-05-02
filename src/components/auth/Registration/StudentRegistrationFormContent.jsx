import StudentRegistrationForm from "./StudentRegistrationForm";
import LoginImage from "../../auth/Login/LoginImage";
import "../../../pages/login.css";
import Logo from "../../../ui/Logo/Logo";
const RegistrationFormContent = () => {
  return (
    <div className="main-inner-wrapper flex items-center justify-center">
      <div className="imageSection">
        <div className="imgCard">
          <Logo />
          <h1>
            Welcome to <br /> <span>Student portal</span>
          </h1>
          <p>
            "Welcome to the AYUSH Idea Bank! Submit your innovative ideas,
            collaborate with mentors, and track your progress in integrative
            medicine and science."
          </p>
          <LoginImage />
        </div>
      </div>
      <div className="form-wrapper w-96 bg-white rounded-md">        
        <div className="form-card">
          <div className="header">
            <h2>Login</h2>
          </div>
          <StudentRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormContent;
