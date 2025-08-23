import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Transformando a través <br/>de la
              <span className="hero__title-highlight"> libertad</span>
            </h1>
            
            <p className="hero__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="hero__cta">
              <Link
                to="donations"
                smooth={true}
                duration={150}
                className="btn btn-accent hero__cta-primary"
              >
                Quiero Donar
              </Link>
              
              <Link
                to="mission"
                smooth={true}
                duration={150}
                className="btn btn-secondary hero__cta-secondary"
              >
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`hero__scroll-indicator ${isScrolled ? 'hero__scroll-indicator--hidden' : ''}`}>
        <div className="hero__scroll-arrow"></div>
        <span className="hero__scroll-text">Desliza para explorar</span>
      </div>
    </section>
  );
};

export default Hero;
