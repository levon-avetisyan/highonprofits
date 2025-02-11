import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../utils/ApexOptions";

const ThreePushWedgeTopChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:30:00Z"), y: [4475.00, 4476.25, 4474.75, 4475.75] }, // Early bullish push (09:30 NY time)
                { x: new Date("2023-01-01T14:35:00Z"), y: [4475.75, 4477.00, 4475.50, 4476.50] }, // Push 1 - Strong bullish candle
                { x: new Date("2023-01-01T14:40:00Z"), y: [4476.50, 4478.00, 4476.25, 4477.75] }, // Push 2 - Higher high with smaller body
                { x: new Date("2023-01-01T14:45:00Z"), y: [4477.75, 4478.25, 4477.00, 4477.50] }, // Push 3 - Weak high with long upper wick
                { x: new Date("2023-01-01T14:50:00Z"), y: [4477.50, 4477.75, 4475.75, 4476.00] }, // Bearish reversal starts
                { x: new Date("2023-01-01T14:55:00Z"), y: [4476.00, 4476.50, 4474.75, 4475.25] }, // Follow-through selling confirms reversal
                { x: new Date("2023-01-01T15:00:00Z"), y: [4475.25, 4475.50, 4473.75, 4474.50] }, // Continuation of bearish trend
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
                <h3>Three Push Pattern (Wedge Top) Example</h3>
                <p>
                    At <strong>09:35</strong>, the first push forms with a strong bullish candle, followed by a second push at <strong>09:40</strong> to a higher high. At <strong>09:45</strong>, a third push forms but struggles to break significantly higher, leaving a long upper wick. At <strong>09:50</strong>, the price reverses with a bearish candle, confirming the wedge top reversal.
                </p>
                <ul>
                    <li><strong>09:35:</strong> First push to a higher high shows strong bullish momentum.</li>
                    <li><strong>09:40:</strong> Second push forms a higher high with a smaller candle body.</li>
                    <li><strong>09:45:</strong> Third push struggles, leaving a long upper wick.</li>
                    <li><strong>09:50:</strong> Bearish candle confirms the wedge top reversal.</li>
                </ul>
            </div>
        </div>
    );
};

export default ThreePushWedgeTopChart;
