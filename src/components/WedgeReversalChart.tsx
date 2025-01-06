import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Helper to convert to New York time (Eastern Time)
const convertToEasternTime = (date: Date): string => {
    return new Date(date).toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
};

const WedgeReversalChart: React.FC = () => {
    const series = [
        {
            data: [
                { x: new Date("2023-01-01T14:10:00Z"), y: [4490.00, 4495.25, 4487.75, 4493.50] },
                { x: new Date("2023-01-01T14:15:00Z"), y: [4493.50, 4499.50, 4491.25, 4497.25] },
                { x: new Date("2023-01-01T14:20:00Z"), y: [4497.25, 4502.00, 4495.75, 4500.50] },
                { x: new Date("2023-01-01T14:30:00Z"), y: [4500.50, 4506.25, 4498.75, 4503.75] },
                { x: new Date("2023-01-01T14:35:00Z"), y: [4503.75, 4510.00, 4502.25, 4507.50] },
                { x: new Date("2023-01-01T14:40:00Z"), y: [4507.50, 4513.75, 4505.75, 4511.00] },
                { x: new Date("2023-01-01T14:45:00Z"), y: [4511.00, 4516.50, 4509.25, 4513.75] },
                { x: new Date("2023-01-01T14:50:00Z"), y: [4513.75, 4518.00, 4510.75, 4515.25] },
                { x: new Date("2023-01-01T14:55:00Z"), y: [4515.25, 4520.00, 4513.00, 4518.50] },
                { x: new Date("2023-01-01T15:00:00Z"), y: [4518.50, 4524.25, 4516.75, 4521.00] },
                { x: new Date("2023-01-01T15:05:00Z"), y: [4521.00, 4526.50, 4519.25, 4523.75] },
                { x: new Date("2023-01-01T15:10:00Z"), y: [4523.75, 4530.00, 4522.25, 4528.50] },
                { x: new Date("2023-01-01T15:15:00Z"), y: [4528.50, 4534.75, 4526.75, 4532.25] },
                { x: new Date("2023-01-01T15:20:00Z"), y: [4532.25, 4538.25, 4529.50, 4534.75] },
                { x: new Date("2023-01-01T15:25:00Z"), y: [4534.75, 4540.00, 4533.00, 4537.50] },
            ],
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "candlestick",
            height: 400,
            toolbar: { show: false },
            zoom: { enabled: false },
            selection: { enabled: false },
            background: "#f7f7f7",
        },
        annotations: {
            xaxis: [
                {
                    x: new Date("2023-01-01T14:45:00Z").getTime(),
                    borderColor: "#DC3545",
                    label: {
                        text: "Bearish Reversal",
                        style: {
                            color: "#fff",
                            background: "#DC3545",
                        },
                        position: "bottom",
                        offsetY: 10,
                    },
                },
                {
                    x: new Date("2023-01-01T15:20:00Z").getTime(),
                    borderColor: "#28A745",
                    label: {
                        text: "Bullish Reversal",
                        style: {
                            color: "#000000",
                            background: "#28A745",
                        },
                        position: "top",
                        offsetY: 10,
                    },
                },
            ],
        },
        xaxis: {
            type: "datetime",
            tickAmount: 4,
            labels: {
                formatter: (val: string) => convertToEasternTime(new Date(val)),
            },
        },
        yaxis: {
            opposite: true,
            tickAmount: 12, // Ensure it aligns with the tick increment (0.25)
            decimalsInFloat: 2, // Display two decimal places for tick values
            tooltip: {
                enabled: true,
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
            enabled: true,
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
