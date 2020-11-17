import React, { useState, useEffect } from "react";

// Components
import BadgeHero from "../components/BadgeHero";
import BadgeForm from "../components/BadgeForm";
import BadgeCard from "../components/BadgeCard";
import Loading from "../components/Loading";

// Assets
import "../assets/sass/components/badgedit.scss";

// Utils
import { getAttendantById, editAttendant } from "../utils/requests";
import { createAttendantObj, getAttendantState } from "../utils/";

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
      const newState = getAttendantState(target, prevState, selectName);
      return newState;
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
        error: null,
        data,
      });
      const link = `/badges/${idBadge}`;
      history.push(link);
    } catch (error) {
      setState({
        loading: false,
        data: null,
        error,
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
    };
  }, [match]);

  return (
    <>
      <BadgeHero />
      <section className="container BadgeEdit">
        <div className="BadgeEdit__container">
          {state.loading || state.data ? (
            <Loading />
          ) : (
            <>
              <div className="BadgeEdit__wrapper">
                <div className="BadgeEdit__node">
                  <BadgeCard description={attendant} />
                </div>
                <div className="BadgeEdit__node">
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
