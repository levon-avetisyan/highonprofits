import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const TwoBarReversalChart: React.FC = () => {
    const series = [
        {
            data: [
                // First Two-Bar Reversal (Bullish)
                {
                    x: new Date("2023-01-01T09:30:00"), // First 5-minute candle
                    y: [4500, 4505, 4490, 4492], // Bearish bar
                },
                {
                    x: new Date("2023-01-01T09:35:00"), // Second 5-minute candle
                    y: [4492, 4510, 4492, 4508], // Bullish bar reversing the prior
                },
                // Second Two-Bar Reversal (Bearish)
                {
                    x: new Date("2023-01-01T09:40:00"), // Third 5-minute candle
                    y: [4508, 4512, 4505, 4510], // Bullish bar
                },
                {
                    x: new Date("2023-01-01T09:45:00"), // Fourth 5-minute candle
                    y: [4510, 4510, 4498, 4500], // Bearish bar reversing the prior
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
                format: "HH:mm", // Display time as 5-minute intervals
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

export default TwoBarReversalChart;
