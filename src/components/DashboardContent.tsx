// src/components/DashboardContent.tsx
import React, { useState } from 'react';

// Sample data for devices
const initialDevices = [
  { id: 'D-10155', type: 'Non-Rental Device', date: '2025-04-29 14:20', status: 'Active' },
  { id: 'D-10155', type: 'Rental Device', date: '2025-04-29 14:20', status: 'Inactive', detail: 'Rental days updated' },
  { id: 'D-10155', type: 'Rental Device', date: '2025-04-29 14:20', status: 'Active', detail: 'Device turned off' },
  { id: 'D-10155', type: 'Non-Rental Device', date: '2025-04-29 14:20', status: 'Inactive', detail: 'Device failed to respond' },
  { id: 'D-10155', type: 'Non-Rental Device', date: '2025-04-29 14:20', status: 'Inactive', detail: 'Device failed to respond' },
];

const DashboardContent: React.FC = () => {
  const [devices, setDevices] = useState(initialDevices);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle device status
  const toggleDeviceStatus = (index: number) => {
    setDevices(prevDevices =>
      prevDevices.map((device, i) =>
        i === index
          ? { ...device, status: device.status === 'Active' ? 'Inactive' : 'Active' }
          : device
      )
    );
  };

  const filteredDevices = devices.filter(device =>
    device.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-grow p-6 bg-gray-100 overflow-auto">
      {/* Dashboard Header Section: "AirMS Dashboard" title and action buttons */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">AirMS Dashboard</h1>
        <div className="flex items-center space-x-3">
          {/* Sync Button */}
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm transition-colors duration-200 flex items-center">
            <i className="fas fa-sync-alt mr-2"></i> Sync
          </button>
          {/* Add New Device Button */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200 flex items-center">
            <i className="fas fa-plus mr-2"></i> Add New Device
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center text-gray-500 mb-2">
            <i className="fas fa-box text-xl mr-2"></i> Total Devices
          </div>
          <p className="text-4xl font-bold text-gray-800">20</p>
          <p className="text-xs text-gray-400 mt-2">Last synced: Today at 10:40</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center text-gray-500 mb-2">
            <i className="fas fa-calendar-alt text-xl mr-2"></i> Rental Devices
          </div>
          <p className="text-4xl font-bold text-gray-800">14</p>
          <p className="text-xs text-gray-400 mt-2">Last synced: Today at 10:40</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center text-gray-500 mb-2">
            <i className="fas fa-cube text-xl mr-2"></i> Non-Rental Devices
          </div>
          <p className="text-4xl font-bold text-gray-800">06</p>
          <p className="text-xs text-gray-400 mt-2">Last synced: Today at 10:40</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center text-gray-500 mb-2">
            <i className="fas fa-bolt text-xl mr-2"></i> Power Usage
          </div>
          <p className="text-4xl font-bold text-gray-800">1,324<span className="text-base"> kWh</span></p>
          <p className="text-xs text-gray-400 mt-2">Last synced: Today at 10:40</p>
        </div>
      </div>

      {/* Quick Device Control */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Device Control</h3>
        <p className="text-sm text-gray-500 mb-4">Monitor and upload device status instantly from here</p>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto flex-grow">
            <input
              type="text"
              placeholder="Search devices by ID, or by device type"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto">
            All Devices <i className="fas fa-chevron-down ml-2"></i>
          </button>
        </div>

        {/* Device List */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDevices.map((device, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <i className="fas fa-microchip text-gray-500 mr-3"></i>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{device.id}</div>
                        <div className="text-xs text-gray-500">{device.type}</div>
                      </div>
                      <i className="fas fa-external-link-alt text-xs text-blue-500 ml-2"></i>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {device.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="inline-flex items-center">
                      <span className={`h-2 w-2 rounded-full mr-2 ${device.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {device.detail || (device.status === 'Active' ? 'Device active' : 'Device inactive')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end">
                      {/* Toggles are slightly different in the image, using explicit "Off" and "On" */}
                      <span className="mr-3 text-gray-500">{device.status === 'Active' ? 'Active' : 'Inactive'}</span>
                      <label htmlFor={`toggle-${index}`} className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            id={`toggle-${index}`}
                            className="sr-only"
                            checked={device.status === 'Active'}
                            onChange={() => toggleDeviceStatus(index)}
                          />
                          {/* Track */}
                          <div className={`block w-12 h-6 rounded-full transition-colors duration-200
                            ${device.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          {/* Thumb */}
                          <div className={`dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200
                            ${device.status === 'Active' ? 'translate-x-6' : ''}`}></div>
                          {/* Labels for On/Off */}
                          <span className={`absolute text-xs font-semibold select-none
                            ${device.status === 'Active' ? 'right-1 top-1.5 text-white' : 'left-1 top-1.5 text-gray-500'}`}>
                            {device.status === 'Active' ? 'On' : 'Off'}
                          </span>
                        </div>
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
          <p>Page 1</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;