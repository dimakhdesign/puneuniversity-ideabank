import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button/Button";

const Dashboard = () => {
  const { currentUser, logoutUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Funtion to logout the user
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  // Function to make name capitalize
  const capitalizeName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div>
      <h1 className="text-center text-[3rem] mt-8">
        Welcome,{" "}
        {capitalizeName(
          currentUser?.name ||
          `${currentUser?.firstName} ${currentUser?.lastName}` ||
          "User"
        )}
        !
      </h1>
      <div className="w-25 flex justify-center w-50 mx-auto mt-3">
        <Button text="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Dashboard;
