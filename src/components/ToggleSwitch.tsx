// src/components/ToggleSwitch.js
import React from 'react';

const ToggleSwitch = ({ isChecked, onText, offText, onToggle }) => {
    return (
        <div
            className={`relative inline-block w-16 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
                isChecked ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={onToggle}
        >
            <div
                className={`absolute w-6 h-6 bg-white rounded-full top-0.5 transition-transform duration-300 ${
                    isChecked ? 'translate-x-9' : 'translate-x-0.5'
                }`}
            ></div>
            <span
                className={`absolute text-white text-xs font-bold top-1/2 -translate-y-1/2 w-full text-center pointer-events-none ${
                    isChecked ? 'left-0' : 'right-0 text-gray-700'
                }`}
            >
                {isChecked ? onText : offText}
            </span>
        </div>
    );
};

export default ToggleSwitch;