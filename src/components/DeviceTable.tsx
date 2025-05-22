// src/components/DeviceTable.tsx
import React from 'react';
import ToggleSwitch from './ToggleSwitch'; // CHANGED: from '../ToggleSwitch' to './ToggleSwitch'
import { FiEdit, FiTrash2 } from 'react-icons/fi';

// Assuming you have defined the Device interface in src/types/device.ts or similar
// If not, you'll need to define it first, or temporarily define it here for testing.
// For example:
interface Device {
    id: number;
    deviceId: string;
    location: string;
    rentalDays: number;
    numberOfSlaves: number;
    deviceType: string;
    isActive: boolean;
    isOn: boolean;
}

interface DeviceTableProps {
    devices: Device[];
    onDeviceUpdate: (id: number, field: keyof Device) => void;
    onEdit: (id: number) => void;         // Add this
    onDelete: (id: number) => void;       // And this
}


// Define the props interface for DeviceTable
interface DeviceTableProps {
    devices: Device[]; // An array of Device objects
    onDeviceUpdate: (id: number, field: keyof Device) => void; // Function that takes ID and a keyof Device
}

const DeviceTable: React.FC<DeviceTableProps> = ({ devices, onDeviceUpdate }) => {
    const handleToggle = (id: number, field: keyof Device) => {
        onDeviceUpdate(id, field);
    };

    return (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Sl.No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Device ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Rental days
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            No. of Slaves
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Device Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Device Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Device State
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {devices.length === 0 ? (
                        <tr>
                            <td colSpan={9} className="px-6 py-4 text-center text-gray-500">
                                No devices found.
                            </td>
                        </tr>
                    ) : (
                        devices.map((device, index) => (
                            <tr key={device.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium hover:underline cursor-pointer">
                                    {device.deviceId}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{device.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{device.rentalDays}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{device.numberOfSlaves}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{device.deviceType}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <ToggleSwitch
                                        isChecked={device.isActive}
                                        onText="Active"
                                        offText="Inactive"
                                        onToggle={() => handleToggle(device.id, 'isActive')}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <ToggleSwitch
                                        isChecked={device.isOn}
                                        onText="On"
                                        offText="Off"
                                        onToggle={() => handleToggle(device.id, 'isOn')}
                                    />
                                </td>
                            
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
    {/* Edit Button */}
    <button
        onClick={() => onEdit(device.id)}
        className="text-indigo-600 hover:text-indigo-900"
        title="Edit Device"
    >
        <FiEdit className="text-lg" />
    </button>

    {/* Delete Button */}
    <button
        onClick={() => onDelete(device.id)}
        className="text-red-600 hover:text-red-900"
        title="Delete Device"
    >
        <FiTrash2 className="text-lg" />
    </button>
</td>


                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceTable;