import ExpertRegistrationForm from "./ExpertRegistrationForm";
import LoginImage from "../auth/Login/LoginImage";

const ExpertRegistrationFormContent = () => {
  return (
    <div className="main-inner-wrapper flex items-stretch gap-2">
      <div className="image">
        <LoginImage />
      </div>
      <div className="form-wrapper w-96 px-[40px] py-[30px] bg-white rounded-md">
        <div className="header">
          <h2>Idea Bank</h2>
          <h3>Expert Registration</h3>
        </div>
        <ExpertRegistrationForm />
      </div>
    </div>
  );
};

export default ExpertRegistrationFormContent;
