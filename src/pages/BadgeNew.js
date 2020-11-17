import React, { useState } from "react";

// Components
import BadgeHero from "../components/BadgeHero";
import BadgeForm from "../components/BadgeForm";
import BadgeCard from "../components/BadgeCard";
import Loading from "../components/Loading";

// Assets
import "../assets/sass/components/badgenew.scss";

// Utils
import { addAttendant } from "../utils/requests";
import { createAttendantObj, getAttendantState } from "../utils/";

const BadgeNew = ({ history }) => {
  const [state, setState] = useState({
    loading: false,
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
      const newAttendant = createAttendantObj(attendant);
      const data = await addAttendant(newAttendant);
      setState({
        loading: false,
        error: null,
        data,
      });
      history.push("/badges");
    } catch (error) {
      setState({
        loading: false,
        data: null,
        error,
      });
    }
  };

  return (
    <>
      <BadgeHero />
      <section className="container BadgeNew">
        <div className="BadgeNew__container">
          {state.loading || state.data ? (
            <Loading />
          ) : (
            <>
              <div className="BadgeNew__wrapper">
                <div className="BadgeNew__node">
                  <BadgeCard description={attendant} />
                </div>
                <div className="BadgeNew__node">
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

export default BadgeNew;
