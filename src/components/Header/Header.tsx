import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import type { NavItem } from '../../types';
import './Header.css';

const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: 'inicio' },
  { id: 'objetivos', label: 'Objetivos', href: 'mision' },
  // { id: 'contacto', label: 'Contacto', href: 'contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>
              <span className="header__logo-text">Fundación Córdoba Avanza</span>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="header__nav-item">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={150}
                    className="header__nav-link"
                    activeClass="header__nav-link--active"
                    spy={true}
                    offset={-80}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón Donar */}
          <div className="header__cta">
            <Link
              to="donations"
              smooth={true}
              duration={500}
              className="btn btn-accent"
              style={{
                background: '#8B5F9F',
                backgroundColor: '#8B5F9F',
                color: '#ffffff',
                border: '1px solid #8B5F9F',
                opacity: 1,
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: 600,
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              Quiero Donar
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menú Móvil */}
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="header__mobile-nav-item">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="header__mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="header__mobile-nav-item">
                <Link
                  to="donations"
                  smooth={true}
                  duration={500}
                  className="btn btn-accent header__mobile-cta"
                  onClick={closeMenu}
                  style={{
                    background: '#8B5F9F',
                    backgroundColor: '#8B5F9F',
                    color: '#ffffff',
                    border: '1px solid #8B5F9F',
                    opacity: 1,
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontWeight: 600,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.875rem'
                  }}
                >
                  Quiero Donar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
