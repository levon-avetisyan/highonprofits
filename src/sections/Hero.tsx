import React from 'react';
import HighOnProfits from '../assets/highonprofits.jpeg';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello There!</h2>
        <div className="hero-image-wrapper">
          <img src={HighOnProfits} alt="HighOnProfits" />
        </div>
        <h1>Welcome to High on Profits</h1>
      </div>
    </section>
  );
};

export default Hero;
