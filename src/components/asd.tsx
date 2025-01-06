import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const WedgeReversalChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:10:00Z"), y: [4490, 4500, 4485, 4495] },
                { x: new Date("2023-01-01T14:15:00Z"), y: [4495, 4508, 4490, 4502] },
                { x: new Date("2023-01-01T14:20:00Z"), y: [4502, 4510, 4498, 4505] },
                { x: new Date("2023-01-01T14:30:00Z"), y: [4505, 4510, 4495, 4505] }, // Push 1
                { x: new Date("2023-01-01T14:35:00Z"), y: [4505, 4515, 4500, 4510] }, // Push 2
                { x: new Date("2023-01-01T14:40:00Z"), y: [4510, 4520, 4508, 4515] }, // Push 3
                { x: new Date("2023-01-01T14:45:00Z"), y: [4515, 4518, 4505, 4508] }, // Reversal starts
                { x: new Date("2023-01-01T14:50:00Z"), y: [4508, 4510, 4498, 4500] }, // Bearish follow-through
                { x: new Date("2023-01-01T14:55:00Z"), y: [4500, 4505, 4485, 4490] },
                { x: new Date("2023-01-01T15:00:00Z"), y: [4490, 4498, 4480, 4485] },
                { x: new Date("2023-01-01T15:05:00Z"), y: [4485, 4495, 4475, 4480] }, // Push 1
                { x: new Date("2023-01-01T15:10:00Z"), y: [4480, 4490, 4470, 4475] }, // Push 2
                { x: new Date("2023-01-01T15:15:00Z"), y: [4475, 4488, 4468, 4478] }, // Push 3
                { x: new Date("2023-01-01T15:20:00Z"), y: [4478, 4490, 4475, 4485] }, // Reversal starts
                { x: new Date("2023-01-01T15:25:00Z"), y: [4485, 4500, 4480, 4495] }, // Bullish follow-through
                { x: new Date("2023-01-01T15:30:00Z"), y: [4495, 4505, 4490, 4500] },
                { x: new Date("2023-01-01T15:35:00Z"), y: [4500, 4510, 4495, 4505] },
            ],
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "candlestick",
            height: 400,
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
                format: "HH:mm", // Display as time (e.g., 09:10)
            },
            title: {
                text: "Time (Eastern Time)",
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
                    upward: "#ffffff",
                    downward: "#000000",
                },
                wick: {
                    useFillColor: false,
                },
            },
        },
        stroke: {
            width: 1,
            colors: ["#000000"],
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                height={400}
            />
            <div style={{ marginTop: "20px", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
                <p>
                    <strong>Bearish Wedge Reversal:</strong> Three pushes higher (09:30 to 09:40 ET) with diminishing
                    strength, followed by a reversal at 09:45 ET.
                </p>
                <p>
                    <strong>Bullish Wedge Reversal:</strong> Three pushes lower (10:05 to 10:15 ET) with diminishing
                    strength, followed by a reversal at 10:20 ET.
                </p>
            </div>
        </div>
    );
};

export default WedgeReversalChart;
