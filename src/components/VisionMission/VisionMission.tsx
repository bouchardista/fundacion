import React from 'react';
import './VisionMission.css';
import { GoGoal } from "react-icons/go";
import { BiWorld } from "react-icons/bi";

const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="vision-mission">
      <div className="container">
        <h2 className="vision-mission__title">Sobre Nosotros</h2>
        <div className="vision-mission__content">
          <div className="vision-mission__card">
            <div className="vision-mission__icon"><GoGoal color='white'/></div>
            <h3>Nuestra Misión</h3>
            <p>Promover los valores de la libertad, la responsabilidad individual y el respeto por los derechos fundamentales.</p>
          </div>
          
          <div className="vision-mission__card">
            <div className="vision-mission__icon"><BiWorld color='white'/></div>
            <h3>Nuestra Visión</h3>
            <p>Ser la fundación de referencia en Córdoba para la promoción del pensamiento liberal en la educación ciudadana.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
