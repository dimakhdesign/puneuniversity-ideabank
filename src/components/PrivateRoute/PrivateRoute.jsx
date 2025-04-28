import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ element }) => {
    const { authData } = useAuth();

    // If the user is not authenticated, redirect to login page
    if (!authData) {
        return <Navigate to="/student-login" replace />;
    }

    return element;
};

export default PrivateRoute;
