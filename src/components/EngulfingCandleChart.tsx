import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const EngulfingCandleChart: React.FC = () => {
  const series = [
    {
      data: [
        // Bullish Engulfing
        {
          x: new Date('2023-01-01T09:30:00'), // First 5-minute candle
          y: [4500, 4503, 4495, 4496], // Bearish bar: Close is below open
        },
        {
          x: new Date('2023-01-01T09:35:00'), // Second 5-minute candle
          y: [4494, 4510, 4493, 4508], // Bullish bar: Fully engulfs the first bar
        },
        // Bearish Engulfing
        {
          x: new Date('2023-01-01T09:40:00'), // Third 5-minute candle
          y: [4508, 4512, 4506, 4510], // Bullish bar: Close is above open
        },
        {
          x: new Date('2023-01-01T09:45:00'), // Fourth 5-minute candle
          y: [4511, 4500, 4498, 4502], // Bearish bar: Fully engulfs the third bar
        },
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      selection: {
        enabled: false,
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'HH:mm', // Display time as 5-minute intervals
      },
    },
    yaxis: {
      title: {
        text: 'Price (ES Mini)',
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#ffffff', // Green for bullish bars
          downward: '#000000', // Red for bearish bars
        },
        wick: {
          useFillColor: false, // Ensures wicks are black regardless of candle color
        },
      },
    },
    stroke: {
      width: 1, // Adds a border outline to the candles
      colors: ['#000000'], // Black outline for all candles
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default EngulfingCandleChart;
