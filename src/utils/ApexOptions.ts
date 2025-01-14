import { ApexOptions } from 'apexcharts';
import { convertToEasternTime, roundToNearestTick } from './helpers';

export const options: ApexOptions = {
  chart: {
    type: 'candlestick',
    height: 400,
    toolbar: { show: false },
    zoom: { enabled: false },
    selection: { enabled: false },
    events: {
      mouseMove: function (event, chartContext) {
        const chart = chartContext.w.globals;
        const cursorY = event.clientY - chart.dom.baseEl.getBoundingClientRect().top;

        // Calculate the price from the y-axis position
        const chartHeight = chart.dom.baseEl.clientHeight;
        const minY = chart.yAxis[0].min; // Min price on the y-axis
        const maxY = chart.yAxis[0].max; // Max price on the y-axis

        const pricePerPixel = (maxY - minY) / chartHeight;
        const hoveredPrice = maxY - cursorY * pricePerPixel;
        const nearestTick = roundToNearestTick(hoveredPrice);

        console.log('Nearest Tick:', nearestTick);
      },
    },
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 4,
    labels: {
      formatter: (val: string) => convertToEasternTime(new Date(val)),
    },
  },
  yaxis: {
    opposite: true, // Price axis on the right side
    tickAmount: 12,
    decimalsInFloat: 2,
    tooltip: {
      enabled: true,
    },
    labels: {
      formatter: (val: number) => roundToNearestTick(val).toFixed(2),
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: '#ffffff',
        downward: '#000000',
      },
      wick: {
        useFillColor: false,
      },
    },
  },
  stroke: {
    width: 1,
    colors: ['#000000'],
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
  },
};
