// src/pages/LogsPage.tsx
import React, { useState } from "react";

// Define the interface for a Log entry
export interface Log {
  timestamp: string;
  action: string;
  performedBy: string;
  type: string; // Added 'type' based on the screenshot
  result: string;
  details: string;
}

// Dummy data for logs
const generateDummyLogs = (count: number): Log[] => {
  const logs: Log[] = [];
  const actions = [
    "Device Turned Off",
    "Status set to Inactive",
    "Slave count reduced",
    "Device failed to respond",
    "Device Turned On",
    "Rental days updated",
  ];
  const performedBy = ["System", "Manual", "Admin"];
  const types = ["System", "Manual", "Auto"]; // Added types for dummy data
  const results = ["Success", "Failed"];
  const details = [
    "Auto trigger",
    "Edited manually",
    "5 -> 4",
    "signal lost",
    "45 days",
    "Update successful",
  ];

  for (let i = 0; i < count; i++) {
    const date = new Date(
      2025,
      3,
      29,
      14,
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60)
    ); // April 29, 2025
    logs.push({
      timestamp: `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`,
      action: actions[Math.floor(Math.random() * actions.length)],
      performedBy: performedBy[Math.floor(Math.random() * performedBy.length)],
      type: types[Math.floor(Math.random() * types.length)], // Random type
      result: results[Math.floor(Math.random() * results.length)],
      details: details[Math.floor(Math.random() * details.length)],
    });
  }
  return logs;
};

const LogsBPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterActive, setFilterActive] = useState<boolean>(false); // Example filter state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const logsPerPage = 10;

  // Use dummy data for now
  const allLogs = generateDummyLogs(23); // Total 23 logs as per the screenshot

  // Filter logs based on search term (simple case-insensitive search across all fields)
  const filteredLogs = allLogs.filter((log) =>
    Object.values(log).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Content Body */}
        <div className="p-6">
          {/* Device ID section - as seen in the screenshot */}
         <div className="bg-gray-100 rounded-lg p-3 mb-6 flex items-center justify-between text-sm">
      <span className="font-semibold text-gray-700">Device ID-10155</span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Device Status</span>
          <span className="flex items-center text-green-600">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-1"></span>{" "}
            Active
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Device State</span>
          <span className="flex items-center text-red-600">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-1"></span>{" "}
            Off
          </span>
        </div>
        {/* Export CSV Button - Added as requested and seen in screenshot */}
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
           Export CSV
        </button>
      </div>
    </div>

          {/* Logs Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performed By
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>{" "}
                  {/* Added 'Type' column */}
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Result
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentLogs.length > 0 ? (
                  currentLogs.map((log, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {log.timestamp}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {log.action}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {log.performedBy}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {log.type}
                      </td>{" "}
                      {/* Render 'Type' */}
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {log.result}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {log.details}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-3 text-center text-sm text-gray-500"
                    >
                      No logs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <span>
              Showing {currentLogs.length} Logs out of {filteredLogs.length}{" "}
              total
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {currentPage}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogsBPage;
