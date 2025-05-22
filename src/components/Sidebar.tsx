// src/components/Sidebar.tsx (Adjusted)
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import bhonphul_logo from '../../src/assets/bhonphul_logo.png'


const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDevicesSubMenuOpen, setIsDevicesSubMenuOpen] = useState(false);

  const isPathActive = (paths: string | string[]): boolean => {
    if (typeof paths === 'string') {
      return location.pathname === paths;
    }
    return paths.some(path => location.pathname.startsWith(path));
  };

  const navItems = [
    { name: 'Dashboard', icon: 'fas fa-th-large', path: '/dashboard' },
    {
      name: 'Devices',
      icon: 'fas fa-hdd',
      path: '/dashboard', // Base path for devices
      subItems: [
        { name: 'Non-Rental Devices', count: 23, path: '/devices' }, // This path is the same as parent
        { name: 'Rental Devices', count: 41, path: '/devices/rental' },
      ],
    },
    { name: 'Logs', icon: 'fas fa-clipboard-list', path: '/logs-a' },
  ];

  useEffect(() => {
    const devicesPaths = ['/devices', '/devices/rental']; // Only primary device paths, not non-rental for now
    if (isPathActive(devicesPaths)) {
      setIsDevicesSubMenuOpen(true);
    } else {
      setIsDevicesSubMenuOpen(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={`
        ${isSidebarCollapsed ? 'w-20' : 'w-[280px]'}
        bg-white text-gray-800 flex flex-col h-full py-6 px-4 shadow-xl
        transition-all duration-300 ease-in-out
        overflow-hidden
      `}
    >
      <div className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between'} mb-8 px-2`}>
        <div className={`flex items-center ${isSidebarCollapsed ? 'hidden' : ''}`}>
          <img src={bhonphul_logo} alt="Logo" className="h-8 w-20 mr-2" />
        </div>
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={`text-gray-500 hover:text-gray-700 ${isSidebarCollapsed ? 'mx-auto' : ''}`}
        >
          <i className={`fas ${isSidebarCollapsed ? 'fa-arrow-right' : 'fa-arrow-left'} text-lg`}></i>
        </button>
      </div>

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => {
                      if (!isSidebarCollapsed) {
                        setIsDevicesSubMenuOpen(!isDevicesSubMenuOpen);
                        // Optional: Navigate to the base path when toggling the parent menu
                        // if (!isDevicesSubMenuOpen) { // Only navigate if opening
                            navigate(item.path); // Navigate to /devices when clicking the main "Devices" button
                        // }
                      } else {
                        setIsSidebarCollapsed(false);
                        setIsDevicesSubMenuOpen(true);
                        navigate(item.path); // Also navigate when expanding from collapsed state
                      }
                    }}
                    className={`flex items-center ${isSidebarCollapsed ? 'justify-center w-full' : 'justify-between w-full p-3'} rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200
                      ${isPathActive([item.path, ...item.subItems.map(sub => sub.path)]) ? 'bg-purple-100 text-purple-700 font-semibold' : ''}`}
                  >
                    <span className={`flex items-center ${isSidebarCollapsed ? '' : 'flex-grow'}`}>
                      <i className={`${item.icon} ${isSidebarCollapsed ? '' : 'mr-3'} text-lg`}></i>
                      {!isSidebarCollapsed && <span>{item.name}</span>}
                    </span>
                    {!isSidebarCollapsed && (
                      <i className={`fas ${isDevicesSubMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs ml-2`}></i>
                    )}
                  </button>
                  {isDevicesSubMenuOpen && !isSidebarCollapsed && (
                    <ul className="mt-2 ml-8">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name} className="mb-1">
                          <Link
                            to={subItem.path}
                            className={`flex items-center justify-between w-full py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-200
                              ${isPathActive(subItem.path) ? 'bg-purple-100 text-purple-700 font-semibold' : ''}`}
                          >
                            <span>{subItem.name}</span>
                            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{subItem.count}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center ${isSidebarCollapsed ? 'justify-center p-3' : 'p-3'} rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200
                    ${isPathActive(item.path) ? 'bg-purple-100 text-purple-700 font-semibold' : ''}`}
                >
                  <i className={`${item.icon} ${isSidebarCollapsed ? '' : 'mr-3'} text-lg`}></i>
                  {!isSidebarCollapsed && <span>{item.name}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <Link
          to="/login"
          className={`flex items-center ${isSidebarCollapsed ? 'justify-center p-3' : 'p-3'} rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200`}
        >
          <i className="fas fa-sign-out-alt text-lg"></i>
          {!isSidebarCollapsed && <span className="ml-3">Sign Out</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;