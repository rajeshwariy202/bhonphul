// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import HomePage from './HomePage';
import DashboardContent from './components/DashboardContent';
import DevicesPage from './pages/DevicesPage';
import LogsAPage from './pages/LogsAPage';
import LogsBPage from './pages/LogsBPage';
import DeviceIdPage from './pages/DeviceIdPage';



// A simple component to handle the initial redirect
const HomeRedirect: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    // Redirect to the login page by default when the app loads
    navigate('/login');
  }, [navigate]);
  return null; // This component doesn't render anything visible
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
         <Route path="/" element={<HomeRedirect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />

        {/* Dashboard/Application Routes */}
        {/* Wrap HomePage to contain nested routes for Dashboard, Devices, Logs */}
        <Route path="/" element={<HomePage />}>
          {/* Default route inside HomePage when just '/' is accessed, redirects to dashboard */}
          <Route path="dashboard" element={<DashboardContent />} /> {/* Use relative path "dashboard" */}

          {/* Devices Routes: DevicesPage will render at /devices */}
          {/* This is the correct and standard way to define nested routes. */}
          {/* It means /devices shows DevicesPage, and /devices/:id shows DeviceIDPage, both within HomePage's Outlet. */}
          <Route path="devices" element={<DevicesPage />} /> {/* This route will render DevicesPage directly at /devices */}
          <Route path="devices-id" element={<DeviceIdPage />} /> {/* This route will render DeviceIDPage directly at /devices/:id */}


          {/* Add routes for other sidebar items */}
          {/* Keep the logs route, using relative path */}
          <Route path="logs" element={<LogsBPage />} />
          <Route path="logs-a" element={<LogsAPage />} /> 
        </Route>

        {/* Fallback for unknown paths (optional) */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};




export default App;