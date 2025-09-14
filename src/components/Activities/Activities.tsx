import React from 'react';
import { Link } from 'react-scroll';
import type { Project } from '../../types';
import './Activities.css';

const projects: Project[] = [
  {
    id: '1',
    title: 'Programa de Educación Digital',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/education.jpg',
    category: 'Educación'
  },
  {
    id: '2',
    title: 'Talleres de Empleabilidad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/workshop.jpg',
    category: 'Empleo'
  },
  {
    id: '3',
    title: 'Apoyo a Microemprendimientos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/business.jpg',
    category: 'Emprendimiento'
  },
];

const Activities: React.FC = () => {
  return (
    <section id="objetivos" className="activities">
      <div className="container">
        <div className="activities__header">
          <h2 className="activities__title">Apoyo a la Fundación</h2>
          <p className="activities__subtitle">
            Tu contribución nos ayuda a seguir trabajando por una Córdoba más libre y próspera
          </p>
        </div>
        
        <div className="activities__cta">
          <h3 className="activities__cta-title">¿Querés apoyar nuestros proyectos?</h3>
          <p className="activities__cta-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link
            to="donations"
            smooth={true}
            duration={150}
            className="btn btn-primary activities__cta-button"
          >
            Hacer una Donación
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activities;
