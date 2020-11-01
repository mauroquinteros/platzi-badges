import React from "react";

// Assets
import platziConf from "../assets/images/platziconf-logo.svg";
import "../assets/sass/components/badgehero.scss";

const BadgeHero = () => {
  return (
    <section className="container BadgeHero">
      <figure className="BadgeHero__container">
        <img
          className="BadgeHero__image"
          src={platziConf}
          alt="platzi conference"
        />
      </figure>
    </section>
  );
};

export default BadgeHero;
