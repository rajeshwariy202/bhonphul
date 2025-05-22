// src/pages/DevicesPage.tsx
import React, { useState, useEffect } from 'react';
import DeviceTable from '../components/DeviceTable'; // Ensure this is DeviceTable.tsx
import Pagination from '../components/Pagination'; // Ensure this is Pagination.tsx
import generateDevices from '../data/devices'; // Ensure this is devices.ts

// Import the Device interface
import type { Device } from '../types/device'; // Adjust path if your types file is elsewhere
import { FiFilter } from 'react-icons/fi';

const DevicesPage: React.FC = () => {
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
    const handleDeviceUpdate = (id: number, field: keyof Device) => {
        setAllDevices((prevDevices: Device[]) =>
            prevDevices.map((device: Device) =>
                device.id === id ? { ...device, [field]: !device[field] } : device
            )
        );
    };

    // paginatedDevices will implicitly be of type Device[]
    const paginatedDevices: Device[] = allDevices.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="p-6 bg-white rounded-lg shadow-md min-h-full flex flex-col">
            <div className="flex items-center mb-5 pb-4 border-b border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-800 mr-5">Non-Rental Devices</h1>
                <span className="text-sm text-gray-500">Last synced: Today at 10:45</span>
                <div className="ml-auto flex space-x-3">
                   <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors">
    <FiFilter className="text-base mr-2" />
    Filter
</button>

                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        <span className="material-icons text-base mr-2"></span> Add New Device
                    </button>
                </div>
            </div>

            <div className="flex-grow">
                <DeviceTable devices={paginatedDevices} onDeviceUpdate={handleDeviceUpdate} />
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