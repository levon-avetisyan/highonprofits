import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../utils/ApexOptions";

const ClimaxBarBearishReversalChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:30:00Z"), y: [4475.00, 4476.25, 4474.75, 4475.75] }, // Early bullish push (09:30 NY time)
                { x: new Date("2023-01-01T14:35:00Z"), y: [4475.75, 4478.00, 4475.50, 4477.50] }, // Strong bullish candle
                { x: new Date("2023-01-01T14:40:00Z"), y: [4477.50, 4480.50, 4477.25, 4480.00] }, // Climax bar with large range
                { x: new Date("2023-01-01T14:45:00Z"), y: [4480.00, 4480.50, 4477.75, 4478.25] }, // Strong bearish bar
                { x: new Date("2023-01-01T14:50:00Z"), y: [4478.25, 4478.50, 4475.75, 4476.50] }, // Follow-through selling
                { x: new Date("2023-01-01T14:55:00Z"), y: [4476.50, 4477.00, 4474.50, 4475.25] }, // Selling pressure continues
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
                <h3>Climax Bar Followed by Strong Bearish Bar Example</h3>
                <p>
                    At <strong>09:40</strong>, a climax bar forms with a large range, signaling extreme bullish momentum. At <strong>09:45</strong>, a strong bearish bar immediately follows, closing below the midpoint of the climax bar, marking the start of a reversal. Subsequent candles confirm the bearish trend.
                </p>
                <ul>
                    <li><strong>09:40:</strong> Climax bar with a large range shows extreme bullish pressure.</li>
                    <li><strong>09:45:</strong> Strong bearish bar closes below the midpoint of the climax bar, signaling reversal.</li>
                    <li><strong>09:50:</strong> Follow-through selling confirms the bearish momentum.</li>
                </ul>
            </div>
        </div>
    );
};

export default ClimaxBarBearishReversalChart;
