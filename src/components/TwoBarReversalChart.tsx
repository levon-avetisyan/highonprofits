import React from "react";
import ReactApexChart from "react-apexcharts";
import { options } from "../utils/ApexOptions";

const TwoBarReversalChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:00:00Z"), y: [4478.25, 4479.50, 4477.75, 4479.25] }, // Early bullish start
                { x: new Date("2023-01-01T14:05:00Z"), y: [4479.25, 4481.50, 4479.00, 4481.00] }, // Strong bullish candle
                { x: new Date("2023-01-01T14:10:00Z"), y: [4481.00, 4482.25, 4480.75, 4481.75] }, // Continued buying
                { x: new Date("2023-01-01T14:15:00Z"), y: [4481.75, 4482.00, 4480.25, 4480.50] }, // Bearish reversal candle
                { x: new Date("2023-01-01T14:20:00Z"), y: [4480.50, 4480.75, 4479.50, 4479.75] }, // Follow-through selling
                { x: new Date("2023-01-01T14:25:00Z"), y: [4479.75, 4480.00, 4478.50, 4478.75] }, // Selling pressure increases
                { x: new Date("2023-01-01T14:30:00Z"), y: [4478.75, 4479.25, 4477.75, 4478.25] }, // Downtrend continues
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
                <h3>Two-Bar Reversal Example</h3>
                <p>
                    At <strong>09:05</strong>, a strong bullish candle pushes the price to new highs, indicating buyer dominance. However, at <strong>09:15</strong>, a large bearish candle forms, closing below the previous bar's low. This shows sellers taking control, marking the start of a bearish reversal.
                </p>
                <ul>
                    <li><strong>09:05:</strong> Bullish candle with strong momentum.</li>
                    <li><strong>09:15:</strong> Bearish reversal bar closes below the prior low.</li>
                    <li><strong>09:20:</strong> Selling continues, confirming the reversal.</li>
                </ul>
            </div>
        </div>
    );
};

export default TwoBarReversalChart;
