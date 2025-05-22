// src/components/KeyMetricsSection.jsx
import React from 'react';

const KeyMetricsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {/* Card 1: Oxygen Purity */}
      {/* Changed background from bg-gray-900 to bg-white. Added border for definition. */}
      {/* Adjusted text colors for better contrast on a light background. */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-200">
        <h3 className="text-gray-600 text-sm mb-2">Oxygen Purity</h3> {/* Changed from text-gray-400 */}
        <p className="text-4xl font-bold text-blue-600">16.4<span className="text-xl">%</span></p> {/* Changed from text-blue-500 */}
        <p className="text-green-600 text-sm mt-2 flex items-center"> {/* Changed from text-green-500 */}
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          +2% from Yesterday
        </p>
        {/* Changed progress bar background from bg-gray-700 to bg-gray-200 */}
        <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
          <div className="h-full bg-blue-500 rounded-full" style={{ width: '16.4%' }}></div>
        </div>
      </div>

      {/* Card 2: Device Status */}
      {/* Changed background from bg-gray-900 to bg-white. Added border for definition. */}
      {/* Adjusted text colors and toggle switch background for light mode. */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-200">
        <h3 className="text-gray-600 text-sm mb-2">Device Status</h3> {/* Changed from text-gray-400 */}
        <div className="flex items-center mt-2">
          <span className="text-green-600 text-xl font-bold mr-2">Active</span> {/* Changed from text-green-500 */}
          <label htmlFor="device-status-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="device-status-toggle" className="sr-only" defaultChecked />
              {/* Changed toggle track background from bg-gray-600 to bg-gray-300 for unchecked state in light mode */}
              <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
        </div>
        <p className="text-gray-500 text-xs mt-2 text-center">
          Indicates if the device is actively communicating.
        </p>
      </div>

      {/* Card 3: Device State */}
      {/* Changed background from bg-gray-900 to bg-white. Added border for definition. */}
      {/* Adjusted text colors and toggle switch background for light mode. */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-200">
        <h3 className="text-gray-600 text-sm mb-2">Device State</h3> {/* Changed from text-gray-400 */}
        <div className="flex items-center mt-2">
          <span className="text-gray-500 text-xl font-bold mr-2">Off</span>
          <label htmlFor="device-state-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="device-state-toggle" className="sr-only" />
              {/* Changed toggle track background from bg-gray-600 to bg-gray-300 for unchecked state in light mode */}
              <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
        </div>
        <p className="text-gray-500 text-xs mt-2 text-center">
          Remote control for turning the Device ON or OFF.
        </p>
      </div>
    </div>
  );
};

export default KeyMetricsSection;