import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BadgeHero from "../components/BadgeHero";
import ServerError from "../components/ServerError";
import BadgeCard from "../components/BadgeCard";
import Modal from "../components/Modal";

// Assets
import "../assets/sass/components/badgedetails.scss";

// Utils
import { getAttendantById, deleteAttendant } from "../utils/requests";

const BadgeDetails = ({ match, history }) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

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
        console.log(data)
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
    getData(match.params.badgeId);

    return () => {
      const controller = new AbortController();
      controller.abort();
      console.log("unmounting");
    };
  }, [match]);

  const handleDeleteBadge = async () => {
    try {
      setState((prev) => ({
        ...prev,
        loading: true,
        error: null,
      }));
      const data = await deleteAttendant(match.params.badgeId);
      console.log(data);
      setState((prev) => ({
        ...prev,
        loading: false,
        data,
      }));
      history.push("/badges");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error,
      }));
    }
  };

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
            <h1>Cargando (agregar componente details)</h1>
          ) : (
            <div className="BadgeDetails__wrapper">
              <div className="BadgeDetails__node">
                <BadgeCard badge={state.data} action="detail" />
              </div>
              <div className="BadgeDetails__node">
                <div>
                  <h2 className="BadgeDetails__button-title fs-medium">
                    Acciones
                  </h2>
                  <div className="BadgeDetails__button-container">
                    <Link
                      className="BadgeDetails__button btn fw-bold"
                      to={`/badges/${match.params.badgeId}/edit/`}
                    >
                      Editar
                    </Link>
                    <button
                      className="BadgeDetails__button danger btn fw-bold"
                      onClick={handleModal}
                    >
                      Eliminar
                    </button>
                    <Modal isOpen={openModal} setOpenModal={setOpenModal} onDelete={handleDeleteBadge}/>
                  </div>
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
