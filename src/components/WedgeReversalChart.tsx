import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { options } from '../utils/ApexOptions';

const WedgeReversalChart: React.FC = () => {
  const series = [
    {
      data: [
        { x: new Date('2023-01-01T14:10:00Z'), y: [4490.0, 4495.25, 4487.75, 4493.5] }, // Initial trend starts
        { x: new Date('2023-01-01T14:15:00Z'), y: [4493.5, 4500.25, 4491.25, 4497.75] }, // Strong uptrend bar
        { x: new Date('2023-01-01T14:20:00Z'), y: [4497.75, 4503.0, 4495.75, 4500.5] }, // Push 1, climax bar
        { x: new Date('2023-01-01T14:25:00Z'), y: [4500.5, 4502.0, 4498.5, 4501.25] }, // Slight retrace
        { x: new Date('2023-01-01T14:30:00Z'), y: [4501.25, 4504.5, 4500.25, 4503.25] }, // Push 2, smaller range
        { x: new Date('2023-01-01T14:35:00Z'), y: [4503.25, 4505.0, 4502.25, 4504.0] }, // Tight range forming
        { x: new Date('2023-01-01T14:40:00Z'), y: [4504.0, 4506.25, 4503.5, 4505.5] }, // Push 3, weak
        { x: new Date('2023-01-01T14:45:00Z'), y: [4505.5, 4505.75, 4503.25, 4504.5] }, // Stalling action
        { x: new Date('2023-01-01T14:50:00Z'), y: [4504.5, 4504.75, 4501.25, 4502.0] }, // Breakout failure
        { x: new Date('2023-01-01T14:55:00Z'), y: [4502.0, 4502.5, 4497.5, 4498.25] }, // Strong reversal
        { x: new Date('2023-01-01T15:00:00Z'), y: [4498.25, 4499.5, 4495.75, 4496.0] }, // Continuation of reversal
      ],
    },
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="candlestick" height={400} />
    </div>
  );
};

export default WedgeReversalChart;
