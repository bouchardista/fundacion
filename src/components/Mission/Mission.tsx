import React from 'react';
import './Mission.css';

const Mission: React.FC = () => {
  return (
    <section id="mision" className="mission">
      <div className="container">
        <div className="mission__header">
          <h2 className="mission__title">Nuestra Misión</h2>
          <p className="mission__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        
        <div className="mission__content">
          <div className="mission__card">
            <div className="mission__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="mission__card-title">Nuestra Misión</h3>
            <p className="mission__card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          

        </div>
        
        <div className="mission__values">
          <h3 className="mission__values-title">Nuestros Valores</h3>
          <div className="mission__values-grid">

            
            <div className="mission__value">
              <div className="mission__value-icon">🤝</div>
              <h4>Transparencia</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">🌟</div>
              <h4>Excelencia</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">🌱</div>
              <h4>Sostenibilidad</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
