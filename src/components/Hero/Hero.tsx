import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero: React.FC = () => {

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__title-container">
              <img 
                src="/logo-fundacion-lla.png" 
                alt="Fundación Córdoba Avanza" 
                className="hero__logo-image"
              />
              <h1 className="hero__title">
                Transformando <br/>
                a través de la <br/>
                <span className="hero__title-highlight">libertad</span>
              </h1>
            </div>
            
            <p className="hero__subtitle">
              La Fundación Córdoba Avanza es una organización sin fines de lucro con sede en la ciudad de Córdoba, 
              nacida en el seno del pensamiento y los valores del partido La Libertad Avanza.
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
                to="mision"
                smooth={true}
                duration={150}
                offset={-100}
                className="btn btn-secondary hero__cta-secondary"
              >
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
