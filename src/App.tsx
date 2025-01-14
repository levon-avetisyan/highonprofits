import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.scss';
import HighOnProfits from './assets/highonprofits.jpeg';
import TwoBarReversalChart from './components/TwoBarReversalChart.tsx';
import BearishPinBarChart from './components/BearishPinBarChart.tsx';// import EngulfingCandleChart from './components/EngulfingCandleChart.tsx';import WedgeReversalChart from './components/WedgeReversalChart.tsx';
import ExhaustionGapEngulfingChart from './components/ExhaustionGapEngulfingChart.tsx';

function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img src={HighOnProfits} alt="HighOnProfits" />
          </div>
          <h1>HIGH ON PROFITS</h1>
        </div>
      </section>
      <section className="patterns">
        <div className="container">
          <h2>Reversal Patterns</h2>
          <div className="row">
            <div className="col-4">
              <div className="chart">
                <TwoBarReversalChart />
              </div>
            </div>
            <div className="col-4">
              <div className="chart">
                <BearishPinBarChart/>
              </div>
            </div>
            <div className="col-4">
              <div className="chart">
                <ExhaustionGapEngulfingChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
