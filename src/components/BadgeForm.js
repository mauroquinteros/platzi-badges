import React, { useState, useEffect } from "react";

// Components
import DynamicSelect from "./DynamicSelect";
import FormError from "./FormError";

// Assets
import "../assets/sass/components/badgeform.scss";

// Utils
import { getJobs } from "../utils/requests";

const BadgeForm = ({ onChange, onSubmit, formValues, error }) => {
  const {
    first_name,
    last_name,
    email,
    twitter_user,
    job: { id_job },
  } = formValues;
  const [jobs, setJobs] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    async function getData() {
      try {
        setJobs({
          loading: true,
          data: null,
          error: null,
        });
        const data = await getJobs();
        setJobs({
          loading: false,
          error: null,
          data,
        });
      } catch (error) {
        setJobs({
          loading: false,
          data: null,
          error,
        });
      }
    }
    getData();

    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, []);

  return (
    <form method="post" className="BadgeForm" onSubmit={onSubmit}>
      {error && (
        <FormError
          title="Error code: 500"
          message="Error al registrar el participante!"
        />
      )}
      <div className="BadgeForm__group">
        <label className="BadgeForm__label fw-bold">Nombres</label>
        <input
          className="BadgeForm__input"
          type="text"
          name="first_name"
          onChange={onChange}
          value={first_name}
        />
      </div>
      <div className="BadgeForm__group">
        <label className="BadgeForm__label fw-bold">Apellidos</label>
        <input
          className="BadgeForm__input"
          type="text"
          name="last_name"
          onChange={onChange}
          value={last_name}
        />
      </div>
      <div className="BadgeForm__group">
        <label className="BadgeForm__label fw-bold">Correo</label>
        <input
          className="BadgeForm__input"
          type="email"
          name="email"
          onChange={onChange}
          value={email}
        />
      </div>
      <div className="BadgeForm__group">
        <label className="BadgeForm__label fw-bold">Título Profesional</label>
        <DynamicSelect
          className="BadgeForm__input"
          name="job"
          onChange={onChange}
          value={id_job}
          jobs={jobs}
        />
      </div>
      <div className="BadgeForm__group">
        <label className="BadgeForm__label fw-bold">Twitter</label>
        <input
          className="BadgeForm__input"
          type="text"
          name="twitter_user"
          onChange={onChange}
          value={twitter_user}
        />
      </div>
      <div className="BadgeForm__submit-container">
        <button type="submit" className="btn fw-bold BadgeForm__submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default BadgeForm;
