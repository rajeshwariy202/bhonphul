// src/pages/LogsAPage.tsx
import React, { useState } from 'react';

// You might want to reuse the Log interface from LogsPage.tsx or define a new one if structure differs
// For simplicity, let's assume the same Log structure for now, but logs will be filtered by device ID
export interface Log {
    timestamp: string;
    action: string;
    performedBy: string;
    type: string; // Renamed from 'Result' in LogsPage for consistency with image 'Type' column
    result: string; // Renamed from 'Result' in LogsPage for consistency with image 'Result' column
    details: string;
}

// Dummy data for logs, potentially filtered by device ID
const generateDummyLogsForDevice = (deviceId: string): Log[] => {
    // This is a simplified dummy data generation.
    // In a real app, you'd fetch logs associated with the selected device ID from an API.
    if (deviceId === '10155') { // Only return logs for '10155' to demonstrate the "no logs" state
        const logs: Log[] = [];
        const actions = ['Device Turned Off', 'Status set to Inactive', 'Slave count reduced', 'Device failed to respond', 'Device Turned On', 'Rental days updated'];
        const performedBy = ['System', 'Manual', 'Admin'];
        const types = ['Auto', 'Manual', 'System']; // Added 'Type' as per image
        const results = ['Success', 'Failed'];
        const details = ['Auto trigger', 'Edited manually', '5 -> 4', 'signal lost', '45 days'];

        for (let i = 0; i < 5; i++) { // Generate a few logs for this specific device
            const date = new Date(2025, 3, 29, 14, Math.floor(Math.random() * 60), Math.floor(Math.random() * 60));
            logs.push({
                timestamp: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
                action: actions[Math.floor(Math.random() * actions.length)],
                performedBy: performedBy[Math.floor(Math.random() * performedBy.length)],
                type: types[Math.floor(Math.random() * types.length)], // Random type
                result: results[Math.floor(Math.random() * results.length)],
                details: details[Math.floor(Math.random() * details.length)],
            });
        }
        return logs;
    }
    return []; // Return empty array if device ID does not match, to show "No logs available"
};

const LogsAPage: React.FC = () => {
    const [searchDeviceId, setSearchDeviceId] = useState<string>('');
    const [selectedDeviceIdLogs, setSelectedDeviceIdLogs] = useState<Log[]>([]);
    const [hasSearched, setHasSearched] = useState<boolean>(false); // To track if a search was attempted

    // Function to handle search (e.g., when '+' is clicked or Enter is pressed)
    const handleSearch = () => {
        setHasSearched(true);
        const logs = generateDummyLogsForDevice(searchDeviceId);
        setSelectedDeviceIdLogs(logs);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b flex items-center justify-left">
                   
                    <div className="flex items-center space-x-4">
                        {/* Search Bar for Device ID */}
                        <div className="relative flex items-center">
                           
                            <input
                                type="text"
                                placeholder="Enter or search Device ID..."
                                className="pl-3 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-72"
                                value={searchDeviceId}
                                onChange={(e) => setSearchDeviceId(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                            />
                           
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                    {/* Logs Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performed By</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th> {/* Column name from image */}
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th> {/* Column name from image */}
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {hasSearched && selectedDeviceIdLogs.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500">
                                            <div className="flex flex-col items-center justify-center">
                                                <span className="material-icons text-4xl text-gray-300 mb-2">find_in_page</span>
                                                No logs available for the selected device
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    selectedDeviceIdLogs.map((log, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{log.timestamp}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{log.action}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{log.performedBy}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{log.type}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{log.result}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{log.details}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogsAPage;