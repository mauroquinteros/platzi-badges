import React from "react";
import { Link } from "react-router-dom";

// Assets
import astronauts from "../assets/images/astronauts.svg";
import platziConf from "../assets/images/platziconf-logo.svg";
import "../assets/sass/components/home.scss";

const Home = () => {
  return (
    <section className="container Home">
      <div className="Home__container">
        <div className="Home__info">
          <figure className="Home__image Home__image-info">
            <img src={platziConf} alt="platzi conference" />
          </figure>
          <h1 className="Home__title fs-large">Crea tu Badge</h1>
          <p className="Home__description">
            La forma más sencilla de manejar tus conferencias
          </p>
          <Link to="/badges/" className="Home__button btn fs-medium">
            Empezar ahora
          </Link>
        </div>
        <figure className="Home__image Home__image-astronauts">
          <img src={astronauts} alt="platzi astronauts" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
