// src/pages/DeviceIdPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import DeviceIdSection from '../components/DeviceIdSection';
import KeyMetricsSection from '../components/KeyMetricsSection';
import Master001Section from '../components/Master001Section';
import SlaveDevicesTable from '../components/SlaveDevicesTable';

const DeviceIdPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    // Changed overall background from dark gray to white, text to black
    <div className="flex-1 p-6 bg-white text-gray-800 min-h-screen">
      {/* <h1 className="text-2xl font-bold mb-6">Device Details: {id}</h1> */}
      <DeviceIdSection />
      <KeyMetricsSection />
      <Master001Section />
      <SlaveDevicesTable />
    </div>
  );
};

export default DeviceIdPage;