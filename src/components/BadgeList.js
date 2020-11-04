import React from "react";

// Components
import BadgeItem from "../components/BadgeItem";

// Assets
import badgesEmpty from "../assets/images/badges-empty.svg";
import "../assets/sass/components/badgelist.scss";

const BadgeList = ({ badges }) => {
  const badgesReverse = [...badges].reverse()
  return (
    <section className="BadgeList">
      {badges.length === 0 ? (
        <div className="BadgeList__empty">
          <h3 className="BadgeList__empty-message fs-medium">No hay Badges!</h3>
          <img
            className="BadgeList__empty-image"
            src={badgesEmpty}
            alt="badges empty"
            loading="lazy"
          />
        </div>
      ) : (
        <ul className="BadgeList__container">
          {badgesReverse.map(({ id_attendant, ...details }) => (
            <BadgeItem
              key={id_attendant}
              idAttendant={id_attendant}
              details={details}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default BadgeList;
