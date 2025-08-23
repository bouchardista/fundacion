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
    <section id="proyectos" className="activities">
      <div className="container">
        <div className="activities__header">
          <h2 className="activities__title">Nuestros Proyectos</h2>
          <p className="activities__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        
        <div className="activities__grid">
          {projects.map((project) => (
            <div key={project.id} className="activities__card">
              <div className="activities__card-image">
                <div className="activities__card-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <div className="activities__card-category">{project.category}</div>
              </div>
              
              <div className="activities__card-content">
                <h3 className="activities__card-title">{project.title}</h3>
                <p className="activities__card-description">{project.description}</p>
                
                <div className="activities__card-stats">
                  <div className="activities__stat">
                    <span className="activities__stat-number">150+</span>
                    <span className="activities__stat-label">Beneficiarios</span>
                  </div>
                  <div className="activities__stat">
                    <span className="activities__stat-number">12</span>
                    <span className="activities__stat-label">Meses</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
