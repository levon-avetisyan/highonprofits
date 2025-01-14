import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../utils/ApexOptions";

const ExhaustionGapEngulfingChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:30:00Z"), y: [4475.00, 4476.25, 4474.75, 4475.75] }, // Early bullish push (09:30 NY time)
                { x: new Date("2023-01-01T14:35:00Z"), y: [4475.75, 4477.50, 4475.50, 4477.00] }, // Strong bullish candle
                { x: new Date("2023-01-01T14:40:00Z"), y: [4477.25, 4478.25, 4476.75, 4478.00] }, // Subtle gap up, visible continuation
                { x: new Date("2023-01-01T14:45:00Z"), y: [4478.00, 4479.00, 4477.50, 4477.75] }, // Exhaustion gap with a long upper wick
                { x: new Date("2023-01-01T14:50:00Z"), y: [4477.75, 4478.00, 4476.25, 4476.50] }, // Bearish engulfing closes below the previous low
                { x: new Date("2023-01-01T14:55:00Z"), y: [4476.50, 4477.00, 4475.00, 4475.25] }, // Follow-through selling confirms reversal
                { x: new Date("2023-01-01T15:00:00Z"), y: [4475.25, 4475.75, 4474.00, 4474.50] }, // Continuation of bearish trend
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
                <h3>Exhaustion Gap and Bearish Engulfing Example</h3>
                <p>
                    At <strong>09:40</strong>, a subtle gap up opens higher than the previous close, continuing buyer momentum. At <strong>09:45</strong>, an exhaustion gap forms, with resistance at the highs and a long upper wick showing buyer fatigue. At <strong>09:50</strong>, a bearish engulfing candle closes below the prior low, confirming a reversal to bearish momentum.
                </p>
                <ul>
                    <li><strong>09:40:</strong> Subtle but visible gap up shows buyers’ continued push.</li>
                    <li><strong>09:45:</strong> Exhaustion gap with resistance and a long upper wick.</li>
                    <li><strong>09:50:</strong> Bearish engulfing candle closes below the prior low, confirming reversal.</li>
                </ul>
            </div>
        </div>
    );
};

export default ExhaustionGapEngulfingChart;
