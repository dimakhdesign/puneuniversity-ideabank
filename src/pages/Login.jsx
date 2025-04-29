import FormHeader from "../components/auth/FormHeader";
import LoginFormContent from "../components/auth/Login/LoginFormContent";

import "./Login.css";

const Login = () => {
  return (
    <>
      <FormHeader />
      <main className="form-main-wrapper flex justify-center pb-8">
        <LoginFormContent />
      </main>
    </>
  );
};

export default Login;
