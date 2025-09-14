import React from 'react';
import { Link } from 'react-scroll';
import type { Project } from '../../types';
import './Activities.css';

const projects: Project[] = [
  {
    id: '1',
    title: 'Formación Política y Ciudadana',
    description: 'Desarrollamos programas de capacitación para ciudadanos comprometidos con los valores del liberalismo y el ideario de La Libertad Avanza.',
    image: '/images/education.jpg',
    category: 'Educación'
  },
  {
    id: '2',
    title: 'Investigación y Análisis Estadístico',
    description: 'Relevamos, analizamos y difundimos datos de interés público que sirven como base para la formulación de políticas públicas efectivas.',
    image: '/images/workshop.jpg',
    category: 'Investigación'
  },
  {
    id: '3',
    title: 'Asesoramiento Técnico y Profesional',
    description: 'Brindamos asistencia técnica a instituciones, dirigentes y ciudadanos interesados en construir una sociedad más libre y eficiente.',
    image: '/images/business.jpg',
    category: 'Asesoramiento'
  },
];

const Activities: React.FC = () => {
  return (
    <section id="objetivos" className="activities">
      <div className="container">
        
        <div className="activities__cta">
          <h3 className="activities__cta-title">Apoyá la Causa</h3>
          <p className="activities__cta-text">
            Tu contribución nos ayuda a seguir trabajando<br />por una Córdoba más libre y próspera
          </p>
          <Link
            to="donations"
            smooth={true}
            duration={150}
            className="btn btn-primary activities__cta-button"
          >
            Quiero Donar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activities;
