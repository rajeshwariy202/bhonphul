// src/components/Pagination.js
import React from 'react';

const Pagination = ({ totalItems, pageSize, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalItems);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-between items-center px-5 py-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
            <span className="showing-text">
                Showing {startIndex} - {endIndex} Non-Rental Devices out of {totalItems} total
            </span>
            <div className="flex items-center">
                <button
                    className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-bold"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                <span className="mx-4">Page {currentPage}</span>
                <button
                    className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-bold"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Pagination;