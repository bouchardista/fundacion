import React from 'react';
import './Mission.css';

const Mission: React.FC = () => {
  return (
    <section id="mision" className="mission">
      <div className="container">
        <div className="mission__header">
          <h2 className="mission__title">Quiénes Somos</h2>
          <p className="mission__subtitle">
            La Fundación Córdoba Avanza es una organización sin fines de lucro con sede en la ciudad de Córdoba, 
            nacida en el seno del pensamiento y los valores del partido La Libertad Avanza.
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
              Contribuir junto a ciudadanos, dirigentes, instituciones y profesionales al fortalecimiento de una sociedad libre, 
              justa y próspera, a través de la investigación, la educación, el análisis estadístico, el asesoramiento técnico 
              y la participación activa en el debate público, orientando nuestras acciones a la formación política y al impulso 
              de reformas estructurales con base en el liberalismo.
            </p>
          </div>
          
          <div className="mission__card">
            <div className="mission__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 className="mission__card-title">Nuestra Visión</h3>
            <p className="mission__card-text">
              Ser un actor clave en la generación de conocimiento, formación de líderes y transformación institucional, 
              contribuyendo al desarrollo de una Córdoba más libre, respetuosa de los derechos individuales, autónoma 
              y con ciudadanos empoderados.
            </p>
          </div>
        </div>
        
        <div className="mission__values">
          <h3 className="mission__values-title">Nuestros Objetivos</h3>
          <div className="mission__values-grid">
            <div className="mission__value">
              <div className="mission__value-icon">🏛️</div>
              <h4>Político</h4>
              <p>Promover la formación, participación y capacitación de ciudadanos en compromiso con los valores del liberalismo y el ideario de La Libertad Avanza.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">🤝</div>
              <h4>Social</h4>
              <p>Fomentar la inclusión, la movilidad social ascendente y la responsabilidad individual como ejes del desarrollo comunitario.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">💼</div>
              <h4>Económico</h4>
              <p>Impulsar estudios, propuestas y debates sobre políticas públicas orientadas a la libertad de mercado, la reducción del gasto público y el respeto a la propiedad privada.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">📚</div>
              <h4>Educativo</h4>
              <p>Desarrollar programas de formación, conferencias, talleres y publicaciones que fomenten el pensamiento crítico, el conocimiento económico y la cultura política liberal.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">📊</div>
              <h4>Estudio y Estadística</h4>
              <p>Relevar, analizar y difundir datos de interés público que sirvan como base para la formulación de políticas públicas.</p>
            </div>
            
            <div className="mission__value">
              <div className="mission__value-icon">⚖️</div>
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
