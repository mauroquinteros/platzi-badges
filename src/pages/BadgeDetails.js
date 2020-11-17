import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BadgeHero from "../components/BadgeHero";
import ServerError from "../components/ServerError";
import BadgeCard from "../components/BadgeCard";
import Modal from "../components/Modal";
import Loading from "../components/Loading";

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
  const [badge, setBadge] = useState({
    avatar_url: "",
    email: "",
    first_name: "",
    id_attendant: 0,
    job: {},
    last_name: "",
    twitter_user: "",
  });
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    async function getData(id) {
      try {
        setState({
          loading: true,
          data: null,
          error: null,
        });
        const idBadge = parseInt(id);
        const data = await getAttendantById(idBadge);
        setBadge(data);
        setState({
          loading: false,
          error: null,
          data: null,
        });
      } catch (error) {
        setState({
          loading: false,
          data: null,
          error,
        });
      }
    }
    getData(match.params.badgeId);

    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [match]);

  const handleDeleteBadge = async () => {
    try {
      setState({
        loading: true,
        data: null,
        error: null,
      });
      const data = await deleteAttendant(match.params.badgeId);
      setState({
        loading: true,
        error: null,
        data,
      });
      history.push("/badges");
    } catch (error) {
      setState({
        loading: true,
        data: null,
        error,
      });
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
          ) : state.loading || state.data ? (
            <Loading />
          ) : (
            <div className="BadgeDetails__wrapper">
              <div className="BadgeDetails__node">
                <BadgeCard description={badge} />
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
                    <Modal
                      isOpen={openModal}
                      setOpenModal={setOpenModal}
                      onDelete={handleDeleteBadge}
                    />
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
