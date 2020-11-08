import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BadgeHero from "../components/BadgeHero";
import SearchBadge from '../components/SearchBadge'
import BadgeList from "../components/BadgeList";
import ServerError from "../components/ServerError";

// Assets
import "../assets/sass/components/badges.scss";

// Utils
import { getBadges } from "../utils/requests";

const Badges = () => {
  const [badges, setBadges] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    async function getData() {
      try {
        setBadges((prevBadges) => ({
          ...prevBadges,
          loading: true,
          error: null,
        }));
        const data = await getBadges();
        setBadges((prevBadges) => ({
          ...prevBadges,
          loading: false,
          data,
        }));
      } catch (error) {
        setBadges((prevBadges) => ({
          ...prevBadges,
          loading: false,
          error: error.message,
        }));
      }
    }
    getData();
  }, []);

  return (
    <>
      <BadgeHero />
      <section className="container Badges">
        <div className="Badges__container">
          {badges.error ? (
            <ServerError title="Ocurrío un Error!" message="Inténtalo más tarde" />
          ) : badges.loading & !badges.data ? (
            <h1>Esta cargando (Agregar componente badges)</h1>
          ) : (
            <>
              <SearchBadge />
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn">
                  Nuevo Badge
                </Link>
              </div>
              <BadgeList badges={badges.data} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Badges;
