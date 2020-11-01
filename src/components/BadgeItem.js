import React from "react";
import { Link } from "react-router-dom";

// Assets
import twitterLogo from "../assets/images/twitter.svg";
import "../assets/sass/components/badgeitem.scss";

const BadgeItem = ({ idAttendant, details }) => {
  const { avatar_url, first_name, job, last_name, twitter_user } = details;
  return (
    <li className="BadgeItem">
      <Link to={`/badges/${idAttendant}`} className="BadgeItem__container">
        <img
          className="BadgeItem__avatar"
          src={avatar_url}
          alt={`${first_name} ${last_name}`}
          loading="lazy"
        />
        <div>
          <h3 className="BadgeItem__name fs-medium fw-bold">
            {first_name} {last_name}
          </h3>
          <div className="BadgeItem__twitter">
            <img
              className="BadgeItem__twitter-logo"
              src={twitterLogo}
              alt="twitter logo"
              loading="lazy"
            />
            <span className="BadgeItem__twitter-user fs-small fw-bold">
              @{twitter_user}
            </span>
          </div>
          <p className="BadgeItem__job fw-light">{job.job_title}</p>
        </div>
      </Link>
    </li>
  );
};

export default BadgeItem;
