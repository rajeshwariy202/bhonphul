// src/pages/DevicesPage.tsx
import React, { useState, useEffect, type FC } from "react"; // Added type FC
import DeviceTable from "../components/DeviceTable"; // Ensure this is DeviceTable.tsx
import Pagination from "../components/Pagination"; // Ensure this is Pagination.tsx
import generateDevices from "../data/devices"; // Ensure this is devices.ts
import { useNavigate } from "react-router-dom";

// Import the Device interface
import type { Device } from "../types/device"; // Adjust path if your types file is elsewhere
import { FiFilter } from "react-icons/fi";

// The DeviceTableProps interface should ideally be defined in DeviceTable.tsx
// or a shared types file (e.g., types/device.ts if Device is also there)
// For now, if DeviceTable.tsx expects these props, this interface is correct for its usage.
// However, it should NOT be used to type DevicesPage.
// You might want to remove this interface definition from DevicesPage.tsx if DeviceTable.tsx already defines and exports it.


const DevicesPage: FC = () => { // <--- CORRECTED: Removed DeviceTableProps from here
  const navigate = useNavigate();
  // Type useState to hold an array of Device objects
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10; // Number of items per page

  useEffect(() => {
    // Simulate fetching data
    // Ensure generateDevices function is typed to return Device[]
    setAllDevices(generateDevices(23)); // 23 non-rental devices
  }, []);

  // Type the parameters for handleDeviceUpdate
  // Note: Your handleDeviceUpdate currently only takes 'id' and 'field'.
  // If you intend to change the value, it needs a 'value' parameter.
  // The DeviceTableProps you defined previously for onDeviceUpdate was `(id: number, field: keyof Device) => void;`
  // If DeviceTable expects a third 'value' argument for onDeviceUpdate, you'll need to adjust its signature.
  // Based on your previous DeviceTableProps: `onDeviceUpdate: (id: number, field: keyof Device) => void;`
  // Your current implementation of `handleDeviceUpdate` matches this.
  const handleDeviceUpdate = (id: number, field: keyof Device) => {
    setAllDevices((prevDevices: Device[]) =>
      prevDevices.map((device: Device) =>
        device.id === id ? { ...device, [field]: !device[field] } : device
      )
    );
  };

  const handleDeviceView = (id: number) => {
    console.log(`Viewing device with ID: ${id}`);
    navigate(`/devices/${id}`); // Example: navigate to a device details page
  };

  const handleDeviceDelete = (id: number) => {
    console.log(`Deleting device with ID: ${id}`);
    setAllDevices((prevDevices) =>
      prevDevices.filter((device) => device.id !== id)
    );
  };

  const handleAddNewDeviceClick = () => {
    navigate("/add-new"); // Navigate to the new page
  };

  // paginatedDevices will implicitly be of type Device[]
  const paginatedDevices: Device[] = allDevices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md min-h-full flex flex-col">
      <div className="flex items-center mb-5 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mr-5">
          Non-Rental Devices
        </h1>
        <span className="text-sm text-gray-500">
          Last synced: Today at 10:45
        </span>
        <div className="ml-auto flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors">
            <FiFilter className="text-base mr-2" />
            Filter
          </button>
          <button
            onClick={handleAddNewDeviceClick}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <span className="material-icons text-base mr-2"></span> Add New Device
          </button>
        </div>
      </div>

      <div className="flex-grow">
        <DeviceTable
          devices={paginatedDevices}
          onDeviceUpdate={handleDeviceUpdate}
          onDeviceView={handleDeviceView}
          onDeviceDelete={handleDeviceDelete}
        />
      </div>

      <div className="mt-5">
        <Pagination
          totalItems={allDevices.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DevicesPage;