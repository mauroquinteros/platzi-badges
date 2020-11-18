import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import logoBadge from "../assets/images/logo-badge.svg";
import "../assets/sass/components/navbar.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// Utils
import { SidebarData } from "../utils/SidebarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <nav className="Navbar">
      <div className="Navbar__container">
        <Link className="Navbar__link logo" to="/">
          <figure className="Navbar__logo">
            <img src={logoBadge} alt="platzi logo badge" loading="lazy" />
          </figure>
          <span className="fw-light fs-normal">Platzi</span>
          <span className="fw-bold fs-normal">badges</span>
        </Link>
        <button className="Navbar__toggle" onClick={handleSidebar}>
          <FaBars className="Navbar__toggle-icon"/>
        </button>
        <ul
          className={sidebar ? "Navbar__menu active" : "Navbar__menu"}
        >
          <li className="Navbar__item-container close" onClick={handleSidebar}>
            <Link to="#" className="Navbar__item">
              <AiOutlineClose className="Navbar__toggle-icon close" />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className="Navbar__item-container">
              <Link to={item.path} className={item.className}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
