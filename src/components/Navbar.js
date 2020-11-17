import React from "react";
import {Link} from 'react-router-dom'

// Assets
import logoBadge from '../assets/images/logo-badge.svg'
import '../assets/sass/components/navbar.scss'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__container">
        <Link className="Navbar__link Navbar__link-logo" to="/">
          <figure className="Navbar__logo">
            <img src={logoBadge} alt="platzi logo badge" loading="lazy"/>
          </figure>
          <span className="fw-light fs-normal">
            Platzi
          </span>
          <span className="fw-bold fs-normal">badges</span>
        </Link>
        <div className="Navbar__link-container">
          <Link className="Navbar__link p-1 fw-light" to="/badges">
            Lista de Badges
          </Link>
          <Link className="Navbar__link p-1 fw-light" to="/badges/new">
            Agregar participante
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
