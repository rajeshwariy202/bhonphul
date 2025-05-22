// src/data/devices.ts

// Define the Device interface here, or import it if you prefer a separate types file
export interface Device {
    id: number;
    deviceId: string;
    location: string;
    rentalDays: number;
    numberOfSlaves: number;
    deviceType: string;
    isActive: boolean; // For Device Status toggle
    isOn: boolean; // For Device State toggle
}

// Interface for detailed sensor data (Master and Slaves)
export interface MasterSlaveData {
    master: {
        airPressure: string; // e.g., "101.3 kPa"
        aqi: number;
        temperature: string; // e.g., "0°C"
        smoke: string; // e.g., "3 ppm"
        humidity: string; // e.g., "0%"
        nosc: number;
        arh: string; // e.g., "21 hrs"
        trt: string; // e.g., "601 hrs"
    };
    slaves: {
        slaveId: string;
        airPressure: string;
        relayTimer: number;
        sarh: number;
    }[];
}


const generateDevices = (count: number): Device[] => {
    const devices: Device[] = [];

    for (let i = 1; i <= count; i++) {
        devices.push({
            id: i,
            deviceId: `10155${i % 10}`, // Keep your original device ID format
            location: `Testing Lab ${i % 5}`,
            rentalDays: 45,
            numberOfSlaves: 122,
            deviceType: "AirMS Master",
            isActive: i % 2 === 0,
            isOn: i % 3 !== 0
        });
    }
    return devices;
};


// NEW: Mock function to get a single device's details by ID
export const getDeviceDetails = (id: number): Device | null => {
    // In a real application, this would typically involve fetching from a backend API.
    // For now, we'll generate all devices and find the one that matches.
    const allDevices = generateDevices(50); // Generate a larger set to ensure the ID is found
    return allDevices.find(device => device.id === id) || null;
};

// NEW: Mock function to get master/slave detailed sensor data for a given deviceId
export const getMasterSlaveDetails = (deviceId: string): MasterSlaveData => {
    // This provides static mock data based on the UI screenshot.
    // In a real application, this would fetch dynamic sensor data.
    return {
        master: {
            airPressure: "101.3 kPa",
            aqi: 0, // Assuming 0 from the image
            temperature: "0°C", // Assuming 0°C from the image
            smoke: "3 ppm", // Assuming 3 ppm from the image
            humidity: "0%", // Assuming 0% from the image
            nosc: 6,
            arh: "21 hrs",
            trt: "601 hrs"
        },
        slaves: [
            { slaveId: "Slave 001", airPressure: "101.3 kPa", relayTimer: 0, sarh: 0 },
            { slaveId: "Slave 002", airPressure: "101.3 kPa", relayTimer: 0, sarh: 0 },
            { slaveId: "Slave 003", airPressure: "101.3 kPa", relayTimer: 0, sarh: 0 },
            { slaveId: "Slave 004", airPressure: "101.3 kPa", relayTimer: 0, sarh: 0 },
            { slaveId: "Slave 005", airPressure: "101.3 kPa", relayTimer: 0, sarh: 0 },
        ]
    };
};

export default generateDevices; // Keep your original default export for generateDevices