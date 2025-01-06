import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PinBarReversalChart: React.FC = () => {
    const series = [
        {
            data: [
                // Bullish Pin Bar (Rejection of lower prices)
                {
                    x: new Date("2023-01-01T09:30:00"), // First 5-minute candle
                    y: [4500, 4510, 4490, 4505], // [open, high, low, close]
                },
                // Bullish Continuation
                {
                    x: new Date("2023-01-01T09:35:00"), // Second 5-minute candle
                    y: [4505, 4520, 4500, 4515],
                },
                // Bearish Pin Bar (Rejection of higher prices)
                {
                    x: new Date("2023-01-01T09:40:00"), // Third 5-minute candle
                    y: [4515, 4525, 4505, 4508], // Long upper wick
                },
                // Bearish Continuation
                {
                    x: new Date("2023-01-01T09:45:00"), // Fourth 5-minute candle
                    y: [4508, 4510, 4495, 4500],
                },
            ],
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "candlestick",
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
            type: "datetime",
            labels: {
                format: "HH:mm", // Display as time (e.g., 09:30)
            },
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
            title: {
                text: "Price (ES Mini)",
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#ffffff", // Green for bullish bars
                    downward: "#000000", // Red for bearish bars
                },
                wick: {
                    useFillColor: false, // Ensures wicks are black regardless of candle color
                },
            },
        },
        stroke: {
            width: 1, // Adds a border outline to the candles
            colors: ["#000000"], // Black outline for all candles
        },
        tooltip: {
            enabled: false
        },
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={350}
            />
        </div>
    );
};

export default PinBarReversalChart;
