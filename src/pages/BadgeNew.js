import React, { useState } from "react";

// Components
import BadgeHero from "../components/BadgeHero";
import BadgeForm from "../components/BadgeForm";
import BadgeCard from "../components/BadgeCard";

// Assets
import "../assets/sass/components/badgenew.scss";

// Utils
import { addAttendant } from "../utils/requests";

const BadgeNew = ({ history }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const [attendant, setAttendant] = useState({
    first_name: "",
    last_name: "",
    email: "",
    twitter_user: "",
    id_job: "",
  });

  const handleChange = ({ target }) => {
    setAttendant((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setState((prevState) => ({
        ...prevState,
        loading: true,
        error: null,
      }));
      const data = await addAttendant(attendant);
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: null,
        data,
      }));
      history.push("/badges");
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: error,
      }));
    }
  };

  console.log(state);
  console.log(attendant);
  return (
    <>
      <BadgeHero />
      <section className="container BadgeNew">
        <div className="BadgeNew__container">
          {state.loading || state.data ? (
            <h1>Esta cargando (Agregar componente)</h1>
          ) : (
            <>
              <div className="BadgeNew__wrapper">
                <div className="BadgeNew__child">
                  <BadgeCard />
                </div>
                <div className="BadgeNew__child">
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
