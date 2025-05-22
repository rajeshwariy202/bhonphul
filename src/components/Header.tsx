// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 flex items-center justify-end shadow-md">
      {/* The image shows a search bar and filter button in the middle,
          and notification/user icons on the right.
          The previous header had "AirMS Dashboard" text, Sync, and Add New Device buttons.
          We'll remove those to match the new image precisely. */}

      {/* Search Bar and Filter Button */}
      <div className="flex items-center space-x-3 mr-auto ml-4"> {/* ml-4 for some left padding, mr-auto to push other items right */}
        <div className="relative flex-grow max-w-md"> {/* max-w-md to control search bar width */}
          <input
            type="text"
            placeholder="Search devices by ID or Location..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
        <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors duration-200">
          <i className="fas fa-filter mr-2"></i> Filter
        </button>
      </div>

      {/* Right side: Notification and User Icon */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="text-gray-500 hover:text-gray-700 relative">
          <i className="fas fa-bell text-xl"></i>
          {/* Red dot for notification - adjust styling if needed */}
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-2 h-2 border border-white"></span>
        </button>

        {/* User Icon (or Profile Picture placeholder) */}
        {/* The image shows a placeholder, so we'll use a simple circle for now */}
        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          {/* You can replace this with an actual user image if available */}
          <i className="fas fa-user text-gray-600 text-lg"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;