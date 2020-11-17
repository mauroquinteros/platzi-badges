import React from "react";

const DynamicSelect = ({ className, name, onChange, value, jobs }) => {
  return (
    <select className={className} name={name} onChange={onChange} value={value}>
      {jobs.loading & !jobs.data ? (
        <option className="BadgeForm__input-option" value={jobs.data}>
          Cargando trabajos...
        </option>
      ) : (
        <>
          <option className="BadgeForm__input-option" value="">
            Elige una opción
          </option>
          {jobs.data.map((job) => (
            <option
              key={job.id_job}
              className="BadgeForm__input-option"
              value={job.id_job}
            >
              {job.job_title}
            </option>
          ))}
        </>
      )}
    </select>
  );
};

export default DynamicSelect;
