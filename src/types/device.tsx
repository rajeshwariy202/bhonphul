// src/data/devices.tsx
export interface Device {
    id: number;
    deviceId: string;
    location: string;
    rentalDays: number;
    numberOfSlaves: number;
    deviceType: string;
    isActive: boolean;
    isOn: boolean;
}

export interface MasterSlaveData {
    master: {
        airPressure: string;
        aqi: string;
        temperature: string;
        smoke: string;
        humidity: string;
        nosc: string;
        arh: string;
        trt: string;
    };
    slaves: {
        slaveId: string;
        airPressure: string;
        relayTimer: string;
        sarh: string;
    }[];
}

export const generateDevices = (count: number): Device[] => {
    const devices: Device[] = [];
    for (let i = 1; i <= count; i++) {
        devices.push({
            id: i,
            deviceId: `10155${(i % 10).toString().padStart(1, '0')}`,
            location: `Testing Lab ${(i % 5)}`,
            rentalDays: 45,
            numberOfSlaves: Math.floor(Math.random() * 5) + 1,
            deviceType: 'AirMS Master',
            isActive: Math.random() > 0.5,
            isOn: Math.random() > 0.5,
        });
    }
    return devices;
};

export const getDeviceDetails = (id: number): Device | undefined => {
    const allDevices = generateDevices(50);
    return allDevices.find(d => d.id === id);
};

export const getMasterSlaveDetails = (deviceId: string): MasterSlaveData | undefined => {
    const masterData = {
        airPressure: '101.3 kPa',
        aqi: '0',
        temperature: '0°C',
        smoke: '3 ppm',
        humidity: '0%',
        nosc: '06',
        arh: '21 hrs',
        trt: '601 hrs',
    };

    const slavesData = [
        { slaveId: 'Slave 001', airPressure: '112.3 kPa', relayTimer: '0', sarh: '0' },
        { slaveId: 'Slave 002', airPressure: '12.3 kPa', relayTimer: '0', sarh: '0' },
        { slaveId: 'Slave 003', airPressure: '0 kPa', relayTimer: '0', sarh: '0' },
        { slaveId: 'Slave 004', airPressure: '0 kPa', relayTimer: '0', sarh: '0' },
        { slaveId: 'Slave 005', airPressure: '0 kPa', relayTimer: '0', sarh: '0' },
    ];

    if (deviceId.startsWith('10155')) {
        return {
            master: masterData,
            slaves: slavesData,
        };
    }
    return undefined;
};