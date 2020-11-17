import React from "react";

// Components
import BadgeItem from "../components/BadgeItem";

// Assets
import badgesEmpty from "../assets/images/badges-empty.svg";
import "../assets/sass/components/badgelist.scss";

const BadgeList = ({ badges, query }) => {
  const badgesReverse = [...badges].reverse();

  const filteredBadges = badgesReverse.filter((badge) =>
    `${badge.first_name} ${badge.last_name}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section className="BadgeList">
      {filteredBadges.length === 0 ? (
        <div className="BadgeList__empty">
          <h3 className="BadgeList__empty-message fs-large">No hay Badges!</h3>
          <img
            className="BadgeList__empty-image"
            src={badgesEmpty}
            alt="badges empty"
            loading="lazy"
          />
        </div>
      ) : (
        <ul className="BadgeList__container">
          {filteredBadges.map(({ id_attendant, ...details }) => (
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
