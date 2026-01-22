import React from 'react';
import './SpecsTable.css';

const SpecsTable = () => {
  const specs = [
    { label: "Engine Type", value: "5.0L Ti-VCT V8" },
    { label: "Transmission", value: "10-Speed SelectShift®" },
    { label: "Drivetrain", value: "Rear-Wheel Drive (RWD)" },
    { label: "Brakes", value: "Brembo™ 6-Piston Front" },
    { label: "Wheels", value: "19-inch Ebony Black" },
    { label: "Curb Weight", value: "3,730 lbs" },
  ];

  return (
    <div className="specs-container">
      <h3 className="specs-header">Technical Specifications</h3>
      <table className="specs-table">
        <tbody>
          {specs.map((item, index) => (
            <tr key={index}>
              <td className="spec-label">{item.label}</td>
              <td className="spec-value">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecsTable;