const SlaveDevicesTable = () => {
  const data = [
    { unit: 'Air Pressure', slave001: '101.3 kPa', slave002: '', slave003: '', slave004: '', slave005: '' },
    { unit: 'Relay Timer', slave001: '0', slave002: '0', slave003: '0', slave004: '0', slave005: '0' },
    { unit: 'SARH', slave001: '0', slave002: '0', slave003: '0', slave004: '0', slave005: '0' },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <table className="min-w-full text-white">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-2 text-left text-gray-400">Units</th>
            <th className="py-2 text-left text-gray-400">Slave 001</th>
            <th className="py-2 text-left text-gray-400">Slave 002</th>
            <th className="py-2 text-left text-gray-400">Slave 003</th>
            <th className="py-2 text-left text-gray-400">Slave 004</th>
            <th className="py-2 text-left text-gray-400">Slave 005</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-800 last:border-b-0">
              <td className="py-3">{row.unit}</td>
              <td className="py-3">{row.slave001}</td>
              <td className="py-3">{row.slave002}</td>
              <td className="py-3">{row.slave003}</td>
              <td className="py-3">{row.slave004}</td>
              <td className="py-3">{row.slave005}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SlaveDevicesTable;