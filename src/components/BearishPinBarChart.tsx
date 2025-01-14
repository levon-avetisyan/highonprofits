import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../utils/ApexOptions";

const BearishPinBarChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:30:00Z"), y: [4475.00, 4476.50, 4474.50, 4475.75] }, // Early bullish push (09:30 NY time)
                { x: new Date("2023-01-01T14:35:00Z"), y: [4475.75, 4477.00, 4475.25, 4476.50] }, // Strong bullish candle
                { x: new Date("2023-01-01T14:40:00Z"), y: [4476.50, 4477.75, 4476.25, 4477.50] }, // Bullish continuation
                { x: new Date("2023-01-01T14:45:00Z"), y: [4477.50, 4478.50, 4476.75, 4477.00] }, // Bearish Pin Bar with long upper wick
                { x: new Date("2023-01-01T14:50:00Z"), y: [4477.00, 4477.25, 4475.50, 4476.00] }, // Bearish follow-through
                { x: new Date("2023-01-01T14:55:00Z"), y: [4476.00, 4476.50, 4474.50, 4475.00] }, // Selling continues
                { x: new Date("2023-01-01T15:00:00Z"), y: [4475.00, 4475.25, 4473.75, 4474.25] }, // Continuation of bearish trend
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
                <h3>Bearish Pin Bar Example</h3>
                <p>
                    At <strong>09:45</strong>, a bearish pin bar forms with a long upper wick, indicating strong resistance and rejection of higher prices. This marks a shift in market sentiment from bullish to bearish. At <strong>09:50</strong>, a bearish candle confirms the reversal as it closes lower, with selling continuing in subsequent candles.
                </p>
                <ul>
                    <li><strong>09:45:</strong> Bearish pin bar with a long upper wick shows resistance and rejection of higher prices.</li>
                    <li><strong>09:50:</strong> Bearish follow-through confirms the reversal.</li>
                    <li><strong>09:55:</strong> Selling pressure continues as the bearish trend develops.</li>
                </ul>
            </div>
        </div>
    );
};

export default BearishPinBarChart;
