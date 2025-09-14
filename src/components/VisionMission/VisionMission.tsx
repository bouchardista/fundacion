import React from 'react';
import './VisionMission.css';

const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="vision-mission">
      <div className="container">
        <h2 className="vision-mission__title">Sobre Nosotros</h2>
        <div className="vision-mission__content">
          <div className="vision-mission__card">
            <div className="vision-mission__icon">🎯</div>
            <h3>Nuestra Misión</h3>
            <p>Promover los valores de la libertad, la responsabilidad individual y el respeto por los derechos fundamentales, contribuyendo al desarrollo de una sociedad más próspera y justa en la provincia de Córdoba.</p>
          </div>
          
          <div className="vision-mission__card">
            <div className="vision-mission__icon">👁️</div>
            <h3>Nuestra Visión</h3>
            <p>Ser la fundación de referencia en Córdoba para la promoción del pensamiento liberal, la educación ciudadana y la construcción de políticas públicas que respeten la libertad individual y fomenten el progreso social.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
