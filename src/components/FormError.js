import React from "react";

// Assets
import CloseIcon from "../assets/images/close-icon.svg";
import "../assets/sass/components/formerror.scss";

const FormError = ({ title, message }) => {
  const handleClick = (ev) => {
    const parent = ev.target.parentNode;
    parent.classList.add("remove");
  };

  return (
    <div className="FormError">
      <img
        className="FormError__icon"
        src={CloseIcon}
        alt="close icon"
        onClick={handleClick}
      />
      <p className="FormError__info">{title}</p>
      <p className="FormError__info">{message}</p>
    </div>
  );
};

export default FormError;
