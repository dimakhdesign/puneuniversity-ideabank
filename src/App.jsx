import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Import your components
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./pages/StudentDashboardLayout";
import Overview from "./components/dashboard/StudentDashboard/Overview";
import ResearchSubmit from "./components/dashboard/StudentDashboard/ResearchSubmit";
import DiscussionForum from "./components/dashboard/StudentDashboard/DiscussionForum";
import Resources from "./components/dashboard/StudentDashboard/Resources";
import Notifications from "./components/dashboard/StudentDashboard/Notifications";
import Settings from "./components/dashboard/StudentDashboard/Settings";

import AdminOverview from "./components/dashboard/AdminDashboard/AdminOverview";
import AdminDashboardLayout from "./pages/AdminDashboardLayout";
import Submissions from "./components/dashboard/AdminDashboard/Submissions";
import ExpertManagement from "./components/dashboard/AdminDashboard/ExpertManagement";
import AdminDiscussionForum from "./components/dashboard/AdminDashboard/AdminDiscussionForum";
import AdminNotifications from "./components/dashboard/AdminDashboard/AdminNotifications";
import DocumentsRepository from "./components/dashboard/AdminDashboard/DocumentsRepository";
import AdminSettings from "./components/dashboard/AdminDashboard/AdminSettings";

import PageNotFound from "./ui/PageNotFound/PageNotFound";

// Import PrivateRoute
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ExpertDashboardLayout from "./pages/ExpertDashboardLayout";
import ExpertDashboard from "./components/dashboard/expert-dashboard/ExpertDashboard";
import StudentList from "./components/dashboard/expert-dashboard/StudentList";

function App() {
  const { authData } = useAuth();

  console.log(authData)

  return (
    <BrowserRouter basename="/puneuniversity-ideabank">
      <Routes>
        {/* <Route path="/" element={authData ? <Navigate to="/dashboard-student" /> : <Login />} /> */}
        <Route
          path="/"
          element={
            authData ? (
              <><Navigate
                to={authData.accessLevel === "Student"
                  ? "/dashboard-student"
                  : authData.accessLevel === "Expert"
                    ? "/dashboard-expert"
                    : authData.accessLevel === "Admin"
                      ? "/dashboard-admin"
                      : "/login"} /><Navigate to={authData.accessLevel === 'Student' ? '/dashboard-student' :
                        authData.accessLevel === 'Expert' ? '/dashboard-expert' :
                          authData.accessLevel === 'Admin' ? '/dashboard-admin' :
                            '/login'} /></>
            ) : (
              <Login />
            )
          }
        />
        {/* <Route path="/student-register" element={authData ? <Navigate to="/dashboard-student" /> : <Register />} /> */}
        <Route
          path="/student-register"
          element={
            authData ? (
              <><Navigate
                to={authData.accessLevel === "Student"
                  ? "/dashboard-student"
                  : authData.accessLevel === "Expert"
                    ? "/dashboard-expert"
                    : authData.accessLevel === "Admin"
                      ? "/dashboard-admin"
                      : "/login"} /><Navigate to={authData.accessLevel === 'Student' ? '/dashboard-student' :
                        authData.accessLevel === 'Expert' ? '/dashboard-expert' :
                          authData.accessLevel === 'Admin' ? '/dashboard-admin' :
                            '/login'} /></>
            ) : (
              <Register />
            )
          }
        />

        {/* <Route path="/expert-register" element={authData ? <Navigate to="/dashboard-expert" /> : <Register />} /> */}

        <Route
          path="/expert-register"
          element={
            authData ? (
              <><Navigate
                to={authData.accessLevel === "Student"
                  ? "/dashboard-student"
                  : authData.accessLevel === "Expert"
                    ? "/dashboard-expert"
                    : authData.accessLevel === "Admin"
                      ? "/dashboard-admin"
                      : "/login"} /><Navigate to={authData.accessLevel === 'Student' ? '/dashboard-student' :
                        authData.accessLevel === 'Expert' ? '/dashboard-expert' :
                          authData.accessLevel === 'Admin' ? '/dashboard-admin' :
                            '/login'} /></>
            ) : (
              <Register />
            )
          }
        />

        {/* <Route path="/login" element={authData ? <Navigate to="/dashboard-student" /> : <Login />} />
         */}
        {/* <Route path="/login" element={authData ? <Navigate to="/dashboard-student" /> : <Login />} /> 
        */}

        <Route
          path="/login"
          element={
            authData ? (
              <><Navigate
                to={authData.accessLevel === "Student"
                  ? "/dashboard-student"
                  : authData.accessLevel === "Expert"
                    ? "/dashboard-expert"
                    : authData.accessLevel === "Admin"
                      ? "/dashboard-admin"
                      : "/login"} /><Navigate to={authData.accessLevel === 'Student' ? '/dashboard-student' :
                        authData.accessLevel === 'Expert' ? '/dashboard-expert' :
                          authData.accessLevel === 'Admin' ? '/dashboard-admin' :
                            '/login'} /></>
            ) : (
              <Login />
            )
          }
        />

        {/* Protected Routes (PrivateRoute used here) */}
        <Route
          path="/dashboard-student"
          element={<PrivateRoute element={<DashboardLayout />} />}
        >
          <Route index element={<Overview />} />
          <Route path="research-submit" element={<ResearchSubmit />} />
          <Route path="discussion-forum" element={<DiscussionForum />} />
          <Route path="resources" element={<Resources />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Protected Routes (PrivateRoute used here) */}
        <Route
          path="/dashboard-admin"
          element={<PrivateRoute element={<AdminDashboardLayout />} />}
        >
          <Route index element={<AdminOverview />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="expert-management" element={<ExpertManagement />} />
          <Route path="discussion-forum" element={<AdminDiscussionForum />} />
          <Route
            path="documents-repository"
            element={<DocumentsRepository />}
          />
          <Route path="notifications" element={<AdminNotifications />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/dashboard-expert" element={<ExpertDashboardLayout />}>
          <Route index element={<StudentList />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
