import React from 'react';
import './Mission.css';
import { CiBank } from "react-icons/ci";
import { FaRegHandshake, FaBriefcase, FaBook, FaChartBar, FaBalanceScale } from "react-icons/fa";

const Mission: React.FC = () => {
  return (
    <section id="mision" className="mission">
      <div className="container">
        <div className="mission__values">
          <h3 className="mission__values-title">Nuestros Objetivos</h3>
          <div className="mission__values-grid">
            <div className="mission__value">
              <div className="mission__value-icon"><CiBank color='white' strokeWidth={0.8} size={38}/></div>
              <h4>Político</h4>
              <p>Promover la formación, participación y capacitación de ciudadanos en compromiso con los valores del liberalismo y el ideario de La Libertad Avanza.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon"><FaRegHandshake color='white' size={38}/></div>
              <h4>Social</h4>
              <p>Fomentar la inclusión, la movilidad social ascendente y la responsabilidad individual como ejes del desarrollo comunitario.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon"><FaBriefcase color='white'/></div>
              <h4>Económico</h4>
              <p>Impulsar estudios, propuestas y debates sobre políticas públicas orientadas a la libertad de mercado, la reducción del gasto público y el respeto a la propiedad privada.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon"><FaBook color='white'/></div>
              <h4>Educativo</h4>
              <p>Desarrollar programas de formación, conferencias, talleres y publicaciones que fomenten el pensamiento crítico, el conocimiento económico y la cultura política liberal.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon"><FaChartBar color='white'/></div>
              <h4>Estudio y Estadística</h4>
              <p>Relevar, analizar y difundir datos de interés público que sirvan como base para la formulación de políticas públicas.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon"><FaBalanceScale color='white' /></div>
              <h4>Asesoramiento</h4>
              <p>Brindar asistencia técnica y profesional a instituciones, dirigentes y ciudadanos interesados en construir una sociedad más libre y eficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
