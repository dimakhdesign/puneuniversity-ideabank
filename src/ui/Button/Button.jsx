import "./Button.css";

const Button = ({ text, onClick, type }) => {
  return (
    <>
      <button type={type} onClick={onClick} className="btn-primary cursor-pointer">
        {text}
      </button>
    </>
  );
};

export default Button;
