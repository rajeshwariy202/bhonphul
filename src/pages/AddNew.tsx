import React, { useState } from 'react';
import type { FC,FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// No props needed for this component if it's a routed page
// interface AddNewDevicePageProps {
//   onClose: () => void; // This prop is no longer necessary if it's a routed page
// }

// Changed to FC without specific props for a routed component, or you can keep FC<{}>
const AddNewDevicePage: FC = () => { // Renamed from AddNewDeviceModal
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [deviceId, setDeviceId] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [rentalDays, setRentalDays] = useState<string>('');
  const [numSlaves, setNumSlaves] = useState<string>('');
  const [deviceType, setDeviceType] = useState<string>('');
  const [deviceStatus, setDeviceStatus] = useState<boolean>(true);
  const [deviceState, setDeviceState] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const rentalDaysNum = parseInt(rentalDays, 10);
    const numSlavesNum = parseInt(numSlaves, 10);

    console.log({
      deviceId,
      location,
      rentalDays: isNaN(rentalDaysNum) ? undefined : rentalDaysNum,
      numSlaves: isNaN(numSlavesNum) ? undefined : numSlavesNum,
      deviceType,
      deviceStatus: deviceStatus ? 'Active' : 'Inactive',
      deviceState: deviceState ? 'On' : 'Off',
    });
    alert('New device added (data logged to console)');
    navigate('/devices'); // Navigate back to the devices list after submission
  };

  const handleCancel = () => {
    navigate('/devices'); // Navigate back to the devices list if cancelled
  };

  return (
    // Removed fixed overlay styles as it's now a full page
    // Using a main content area similar to other pages
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto my-8"> {/* Centered content */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Add New Devices</h2>
          <button
            onClick={handleCancel} // Use handleCancel for consistency
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="deviceId" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Device ID
            </label>
            <input
              type="text"
              id="deviceId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Device ID"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Location
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="rentalDays" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Rental days
            </label>
            <input
              type="number"
              id="rentalDays"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Rental days"
              value={rentalDays}
              onChange={(e) => setRentalDays(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="numSlaves" className="block text-sm font-medium text-gray-700 mb-1">
              Enter No. of Slaves
            </label>
            <input
              type="number"
              id="numSlaves"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="No. of Slaves"
              value={numSlaves}
              onChange={(e) => setNumSlaves(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Device Type
            </label>
            <select
              id="deviceType"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              required
            >
              <option value="" disabled>
                Device Type
              </option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
              <option value="Type C">Type C</option>
            </select>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Device Status</span>
              <label
                htmlFor="deviceStatusToggle"
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="deviceStatusToggle"
                  className="sr-only peer"
                  checked={deviceStatus}
                  onChange={() => setDeviceStatus(!deviceStatus)}
                />
                <div
                  className={`w-11 h-6 rounded-full peer ${
                    deviceStatus ? 'bg-green-500' : 'bg-gray-200'
                  } peer-focus:ring-2 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
                ></div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {deviceStatus ? 'Active' : 'Inactive'}
                </span>
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Device State</span>
              <label
                htmlFor="deviceStateToggle"
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="deviceStateToggle"
                  className="sr-only peer"
                  checked={deviceState}
                  onChange={() => setDeviceState(!deviceState)}
                />
                <div
                  className={`w-11 h-6 rounded-full peer ${
                    deviceState ? 'bg-blue-500' : 'bg-gray-200'
                  } peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
                ></div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {deviceState ? 'On' : 'Off'}
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={handleCancel} // Calls handleCancel to navigate away
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                className="-ml-1 mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add New Device
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewDevicePage; // Export with the new name