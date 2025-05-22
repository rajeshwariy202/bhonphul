// src/components/Master001Section.jsx
import React from 'react';

const Master001Section = () => {
  return (
    // Changed main section background from bg-gray-900 to bg-white
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        {/* Changed text-white to text-gray-800 for title */}
        <h3 className="text-lg font-semibold text-gray-800">Master 001</h3>
        {/* Changed text-gray-400 to text-gray-600 for last synced */}
        <span className="text-gray-600 text-sm">Last synced: Today at 16:45</span>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col">
          {/* Changed text-gray-400 to text-gray-600 */}
          <span className="text-gray-600 text-sm">Air Pressure</span>
          {/* Changed text-white to text-gray-800 */}
          <span className="text-xl font-bold text-gray-800">101.3<span className="text-sm">kPa</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">AQI</span>
          <span className="text-xl font-bold text-gray-800">0</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Temperature</span>
          <span className="text-xl font-bold text-gray-800">0<span className="text-sm">°C</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Smoke</span>
          <span className="text-xl font-bold text-gray-800">3<span className="text-sm">ppm</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Humidity</span>
          <span className="text-xl font-bold text-gray-800">0<span className="text-sm">%</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">NOSC</span>
          <span className="text-xl font-bold text-gray-800">06</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">ARH</span>
          <span className="text-xl font-bold text-gray-800">21<span className="text-sm">hrs</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">TRT</span>
          <span className="text-xl font-bold text-gray-800">601<span className="text-sm">hrs</span></span>
        </div>
      </div>

      {/* Changed text-white to text-gray-800 for heading */}
      <h4 className="text-gray-800 text-md font-semibold mb-3">Air Pressure</h4>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          {/* Changed bg-gray-700 to bg-gray-200 for gauge background */}
          <div className="relative w-12 h-32 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full bg-red-500" style={{ height: '70%' }}></div> {/* Adjust height for actual value */}
          </div>
          {/* Changed text-white to text-gray-800 */}
          <span className="text-gray-800 mt-2">112.3<span className="text-xs">kPa</span></span>
          {/* Changed text-gray-400 to text-gray-600 */}
          <span className="text-gray-600 text-sm">Master 001</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Changed bg-gray-700 to bg-gray-200 for gauge background */}
          <div className="relative w-12 h-32 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full bg-green-500" style={{ height: '40%' }}></div> {/* Adjust height for actual value */}
          </div>
          {/* Changed text-white to text-gray-800 */}
          <span className="text-gray-800 mt-2">12.3<span className="text-xs">kPa</span></span>
          {/* Changed text-gray-400 to text-gray-600 */}
          <span className="text-gray-600 text-sm">Slave 001</span>
        </div>
        <div className="flex flex-col items-center justify-end h-full">
          {/* Changed text-gray-400 to text-gray-600 */}
          <span className="text-gray-600 text-sm">Slave 002</span>
        </div>
        <div className="flex flex-col items-center justify-end h-full">
          <span className="text-gray-600 text-sm">Slave 003</span>
        </div>
        <div className="flex flex-col items-center justify-end h-full">
          <span className="text-gray-600 text-sm">Slave 004</span>
        </div>
        <div className="flex flex-col items-center justify-end h-full">
          <span className="text-gray-600 text-sm">Slave 005</span>
        </div>
      </div>
    </div>
  );
};

export default Master001Section;