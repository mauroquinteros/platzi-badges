import React from 'react'

const DynamicSelect = ({name, onChange, value, jobs}) => {
  return (
    <select name={name} onChange={onChange} value={value}>
      {jobs.loading & !jobs.data ? (
        <option value={jobs.data}>Cargando trabajos...</option>
      ) : (
        <>
          <option value="">Elige una opción</option>
          {jobs.data.map((job) => (
            <option key={job.id_job} value={job.id_job}>
              {job.job_title}
            </option>
          ))}
        </>
      )}
    </select>
  )
}

export default DynamicSelect
