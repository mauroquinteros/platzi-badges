import React from "react";

// Assets
import ServerError from "../assets/images/error-server.svg";
import "../assets/sass/components/error.scss";

const Error = ({ title, message }) => {
  return (
    <div className="Error">
      <h3 className="Error-title fs-large">{title}</h3>
      <p className="Error-message fs-normal">{message}</p>
      <img
        className="Error-image"
        src={ServerError}
        alt="server error"
        loading="lazy"
      />
    </div>
  );
};

export default Error;
