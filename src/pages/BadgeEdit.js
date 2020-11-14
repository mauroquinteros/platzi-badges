import React, { useState, useEffect } from "react";

// Components
import BadgeHero from "../components/BadgeHero";
import BadgeForm from "../components/BadgeForm";
import BadgeCard from "../components/BadgeCard";

// Utils
import { getAttendantById, editAttendant } from "../utils/requests";
import { createAttendantObj } from "../utils/";

const BadgeEdit = ({ match, history }) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [attendant, setAttendant] = useState({
    avatar_url: "",
    email: "",
    first_name: "",
    id_attendant: 0,
    job: {},
    last_name: "",
    twitter_user: "",
  });

  const handleChange = ({ target }) => {
    setAttendant((prevState) => {
      const selectName = "job";
      if (target.name === selectName) {
        const titleValue = target.querySelector(
          `option[value="${target.value}"]`
        ).textContent;
        return {
          ...prevState,
          [target.name]: {
            id_job: target.value,
            job_title: titleValue,
          },
        };
      }
      return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setState({
        loading: true,
        data: null,
        error: null,
      });
      const idBadge = match.params.badgeId;
      const newAttendant = createAttendantObj(attendant);
      const data = await editAttendant(idBadge, newAttendant);
      setState({
        loading: false,
        data,
        error: null,
      });
      const link = `/badges/${idBadge}`;
      history.push(link);
    } catch (error) {
      setState({
        loading: false,
        error,
        data: null,
      });
    }
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
        setAttendant(data);
        setState({
          loading: false,
          data: null,
          error: null,
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
      console.log("unmounting edit page");
    };
  }, [match]);

  return (
    <>
      <BadgeHero />
      <section className="container BadgeEdit">
        <div className="BadgeEdit__container">
          {state.loading || state.data ? (
            <h1>Esta cargando (Editar componente)</h1>
          ) : (
            <>
              <div className="BadgeEdit__wrapper">
                <div className="BadgeEdit__child">
                  <BadgeCard description={attendant} />
                </div>
                <div className="BadgeEdit__child">
                  <BadgeForm
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    formValues={attendant}
                    error={state.error}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BadgeEdit;
