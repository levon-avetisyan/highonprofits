import React from 'react';
import TwoBarReversalChart from '../components/TwoBarReversalChart.tsx';
import BearishPinBarChart from '../components/BearishPinBarChart.tsx';
import ExhaustionGapEngulfingChart from '../components/ExhaustionGapEngulfingChart.tsx';
import DojiBearishTrendBarChart from '../components/DojiBearishTrendBarChart.tsx';
import ThreePushWedgeTopChart from '../components/ThreePushWedgeTopChart.tsx';
import ClimaxBarBearishReversalChart from '../components/ClimaxBarBearishReversalChart.tsx';
// import EngulfingCandleChart from './components/EngulfingCandleChart.tsx';
// import WedgeReversalChart from './components/WedgeReversalChart.tsx';
import './Patterns.scss';

const Patterns: React.FC = () => {
  return (
    <section className="patterns" id="patterns">
      <div className="container">
        <h2>Reversal Patterns</h2>
        <div className="d-flex flex-wrap justify-content-start">
          <div className="chart">
            <TwoBarReversalChart />
          </div>

          <div className="chart">
            <BearishPinBarChart />
          </div>

          <div className="chart">
            <ExhaustionGapEngulfingChart />
          </div>

          <div className="chart">
            <DojiBearishTrendBarChart />
          </div>

          <div className="chart">
            <ThreePushWedgeTopChart />
          </div>

          <div className="chart">
            <ClimaxBarBearishReversalChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patterns;
