import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import StudentLogin from "./pages/StudentLogin";
import ExpertLogin from "./pages/ExpertLogin";
import Register from "./pages/Register";
import Student from "./features/Student";
import Dashboard from "./features/Dashboard";

// Student Dashboard
import DashboardLayout from './pages/DashboardLayout'
import Overview from './components/dashboard/Overview';
import ResearchSubmit from './components/dashboard/ResearchSubmit';
import DiscussionForum from './components/dashboard/DiscussionForum';
import Resources from './components/dashboard/Resources';
import Notifications from './components/dashboard/Notifications';
import Settings from './components/dashboard/Settings';

import AdminOverview from "./components/dashboard/AdminDashboard/AdminOverview";

// Expert Dashboard Components
import ExpertDashboard from "./components/dashboard/expert-dashboard/ExpertDashboard";
import StudentList from "./components/dashboard/expert-dashboard/StudentList";

// Admin Dashboard
import AdminDashboardLayout from "./pages/AdminDashboardLayout";
import Submissions from './components/dashboard/AdminDashboard/Submissions';
import ExpertManagement from './components/dashboard/AdminDashboard/ExpertManagement';
import AdminDiscussionForum from "./components/dashboard/AdminDashboard/AdminDiscussionForum";
import AdminNotifications from "./components/dashboard/AdminDashboard/AdminNotifications";
import DocumentsRepository from "./components/dashboard/AdminDashboard/DocumentsRepository";
import AdminSettings from "./components/dashboard/AdminDashboard/AdminSettings";

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
            <Route path="/expert-dashboard" element={<ExpertDashboard />}>
              <Route index element={<StudentList />}></Route>
            </Route>
            <Route path="/dashboard-student" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="research-submit" element={<ResearchSubmit />} />
              <Route path="discussion-forum" element={<DiscussionForum />} />
              <Route path="resources" element={<Resources />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/dashboard-admin" element={<AdminDashboardLayout />}>
              <Route index element={<AdminOverview />} />
              <Route path="submissions" element={<Submissions />} />
              <Route path="expert-management" element={<ExpertManagement />} />
              <Route path="discussion-forum" element={<AdminDiscussionForum />} />
              <Route path="documents-repository" element={<DocumentsRepository />} />
              <Route path="notifications" element={<AdminNotifications />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
