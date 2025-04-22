import FormHeader from "../components/auth/FormHeader";
import ExpertLoginFormContent from "../components/auth/ExpertLoginFormContent";


import "./Login.css";

const ExpertLogin = () => {
  return (
    <>
      <FormHeader />
      <main className="form-main-wrapper flex justify-center pb-8">
        <ExpertLoginFormContent />
      </main>
    </>
  );
};

export default ExpertLogin;
