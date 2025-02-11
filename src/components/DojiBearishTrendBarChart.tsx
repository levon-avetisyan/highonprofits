import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../utils/ApexOptions";

const DojiBearishTrendBarChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:30:00Z"), y: [4475.00, 4476.50, 4474.50, 4475.75] }, // Early bullish push (09:30 NY time)
                { x: new Date("2023-01-01T14:35:00Z"), y: [4475.75, 4477.00, 4475.25, 4476.50] }, // Strong bullish candle
                { x: new Date("2023-01-01T14:40:00Z"), y: [4476.50, 4477.25, 4476.25, 4477.00] }, // Bullish continuation
                { x: new Date("2023-01-01T14:45:00Z"), y: [4477.00, 4477.50, 4476.75, 4477.25] }, // Doji with equal open and close
                { x: new Date("2023-01-01T14:50:00Z"), y: [4477.25, 4477.50, 4475.75, 4476.00] }, // Bearish trend bar closes below doji low
                { x: new Date("2023-01-01T14:55:00Z"), y: [4476.00, 4476.25, 4474.50, 4475.00] }, // Selling pressure continues
                { x: new Date("2023-01-01T15:00:00Z"), y: [4475.00, 4475.50, 4473.75, 4474.25] }, // Continuation of bearish trend
            ],
        },
    ];

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={280}
            />
            <div className="chart-desc">
                <h3>Doji Followed by Bearish Trend Bar Example</h3>
                <p>
                    At <strong>09:45</strong>, a doji candle forms with equal open and close, showing indecision among traders. This is followed by a bearish trend bar at <strong>09:50</strong>, which closes below the doji’s low, confirming bearish momentum. Subsequent candles continue the downtrend.
                </p>
                <ul>
                    <li><strong>09:45:</strong> Doji candle shows indecision at the top of the trend.</li>
                    <li><strong>09:50:</strong> Bearish trend bar closes below the doji low, confirming reversal.</li>
                    <li><strong>09:55:</strong> Continued selling pressure as the bearish trend develops.</li>
                </ul>
            </div>
        </div>
    );
};

export default DojiBearishTrendBarChart;
