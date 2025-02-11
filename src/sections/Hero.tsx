import React from 'react';
import './Hero.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ButtonPrimary from '../components/ButtonPrimary';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    document.getElementById('patterns')?.scrollIntoView({ behavior: 'smooth' });
  };

  const emText = 'High on Profits';
  const emTextSpans = emText.split('').map((char, index) => (
    <span key={index} className="drunk-letter" style={{ '--index': index } as React.CSSProperties}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="glassbox">
          <h2>Hello There!</h2>
          <div className="hero-image"></div>
          <h1>
            Welcome to <em>{emTextSpans}</em>
          </h1>
          <p className="text-light">
            High on Profits is a platform where you can learn about stock market trading, investing,
            and personal finance. We provide you with the latest news, trends, and analysis to help
            you make better decisions.
          </p>
          <ButtonPrimary text="Get Started" onClick={handleGetStarted} />
          <div className="social-links mt-5">
            <a
              className="mx-3 fs-3"
              href="https://t.me/highonprofits"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-telegram"></i>
            </a>
            <a
              className="mx-3 fs-3"
              href="https://x.com/highonprofits"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              className="mx-3 fs-3"
              href="https://www.instagram.com/highonprofits/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
