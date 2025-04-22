import logo from "../assets/header-logo-1.svg";

const Logo = ({ classname }) => {
  return (
    <img src={logo} alt="Pune University" className={classname} />
  )
}

export default Logo
