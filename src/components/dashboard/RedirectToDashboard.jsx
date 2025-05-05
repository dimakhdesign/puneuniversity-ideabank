import { Navigate } from "react-router-dom";

const RedirectToDashboard = ({ accessLevel }) => {
    const destination =
        accessLevel === "Student"
            ? "/dashboard-student"
            : accessLevel === "Expert"
                ? "/dashboard-expert"
                : accessLevel === "Admin"
                    ? "/dashboard-admin"
                    : "/login";

    return <Navigate to={destination} />;
};


export default RedirectToDashboard
