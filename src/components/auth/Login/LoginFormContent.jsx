import LoginForm from "./LoginForm";
import LoginImage from "../Login/LoginImage";

const LoginFormContent = () => {
  return (
    <div className="main-inner-wrapper flex items-stretch gap-2">
      <div className="image">
        <LoginImage />
      </div>
      <div className="form-wrapper w-96 px-[40px] py-[30px] bg-white rounded-md">
        <div className="header">
          <h2>Idea Bank</h2>
          <h3>Login</h3>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginFormContent;
