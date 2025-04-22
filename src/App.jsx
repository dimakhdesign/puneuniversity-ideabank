import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./pages/StudentLogin";
import ExpertLogin from "./pages/ExpertLogin";
import Register from "./pages/Register";
import Student from "./features/Student";
import Dashboard from "./features/Dashboard";

import DashboardLayout from './pages/DashboardLayout'
import Overview from './components/dashboard/Overview';
import ResearchSubmit from './components/dashboard/ResearchSubmit';
import DiscussionForum from './components/dashboard/DiscussionForum';
import Resources from './components/dashboard/Resources';
import Notifications from './components/dashboard/Notifications';
import Settings from './components/dashboard/Settings';

import { UserProvider } from "./context/UserContext";


// import ExpertDashboard from "./pages/ExpertDashboard";
// import SuperAdminDashboard from "./pages/SuperAdminDashboard";

function App() {

  return (
    <>
      <UserProvider>
        <BrowserRouter basename="/puneuniversity-ideabank">
          <Routes>
            <Route path="/" element={<StudentLogin />}></Route>
            <Route path="/student-register" element={<Register />}></Route>
            <Route path="/expert-register" element={<Register />}></Route>
            <Route path="/student-login" element={<StudentLogin />}></Route>
            <Route path="/expert-login" element={<ExpertLogin />}></Route>
            <Route path="/student" element={<Student />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/dashboard-student" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="research-submit" element={<ResearchSubmit />} />
              <Route path="discussion-forum" element={<DiscussionForum />} />
              <Route path="resources" element={<Resources />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
