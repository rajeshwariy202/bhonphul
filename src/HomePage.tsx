// src/HomePage.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust path as needed
import Header from './components/Header';

const HomePage: React.FC = () => {
  // You might have logic here for authentication checks, etc.

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow"> {/* flex-grow ensures it takes remaining width */}
        {/* Topbar */}
        <Header />

        {/* Content for nested routes */}
        <main className="flex-grow p-4 overflow-y-auto"> {/* flex-grow for vertical space, overflow-y-auto for scrolling */}
          <Outlet /> {/* THIS IS CRUCIAL: Your nested pages (like DeviceIDPage) render here */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;