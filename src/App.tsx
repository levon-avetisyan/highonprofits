import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.scss';

import Hero from './sections/Hero.tsx';
import Patterns from './sections/Patterns.tsx';
import Referral from './sections/Referral.tsx';

function App() {
  return (
    <>
      <Hero />
      <Patterns />
      <Referral />
    </>
  );
}

export default App;
