// src/components/DeviceIdSection.jsx
import React from 'react';

const DeviceIdSection = () => {
  return (
    // Changed background from bg-gray-900 (blackish) to bg-white.
    // Changed text color from text-white to text-gray-800 for better contrast on a light background.
    // Adjusted text-gray-400 to text-gray-600 for the "Last synced" text.
    // Adjusted blue button hover text color to work better on light background.
    <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">Device ID-10155</h2>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">Last synced: Today at 16:45</span>
        <button className="flex items-center text-blue-600 hover:text-blue-700"> {/* Changed from blue-400/300 for better contrast on light */}
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 15.5v2a2.5 2.5 0 002.5 2.5h10A2.5 2.5 0 0019 18.5V17m-7-5v7m0 0l-3-3m3 3l3-3"></path></svg>
          Sync
        </button>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default DeviceIdSection;