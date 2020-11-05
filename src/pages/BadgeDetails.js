import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BadgeHero from "../components/BadgeHero";
import ServerError from "../components/ServerError";
import BadgeCard from "../components/BadgeCard";

// Assets
import "../assets/sass/components/badgedetails.scss";

// Utils
import { getAttendantById } from "../utils/requests";

const BadgeDetails = ({ match }) => {
  const [state, setState] = useState({
    idBadge: match.params.badgeId,
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    async function getData(id) {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const idBadge = parseInt(id);
        const data = await getAttendantById(idBadge);
        console.log(data);
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: error,
        }));
      }
    }
    getData(state.idBadge);

    return () => {
      const controller = new AbortController();
      controller.abort();
      console.log("unmounting");
    };
  }, [state.idBadge]);

  return (
    <>
      <BadgeHero />
      <section className="container BadgeDetails">
        <div className="BadgeDetails__container">
          {state.error ? (
            <ServerError
              title="Ocurrío un Error!"
              message="Inténtalo más tarde"
            />
          ) : state.loading ? (
            <h1>Cargando (agregar componente)</h1>
          ) : (
            <div className="BadgeDetails__wrapper">
              <div className="BadgeDetails__node">
                <BadgeCard badge={state.data} action="detail" />
              </div>
              <div className="BadgeDetails__node">
                <h1>Acciones</h1>
                <div className="BadgeDetails__button-container">
                  <Link
                    className="BadgeDetails__button"
                    to={`/badges/${state.idBadge}/edit/`}
                  >
                    Editar
                  </Link>
                  <button className="BadgeDetails__button">Eliminar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BadgeDetails;
