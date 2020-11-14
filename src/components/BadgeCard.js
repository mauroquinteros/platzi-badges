import React from "react";

// Assets
import platziConf from "../assets/images/badge-header.svg";
import twitterLogo from "../assets/images/twitter.svg";
import "../assets/sass/components/badgecard.scss";

// Utils
import { createUrl } from "../utils";

const BadgePreview = ({ description }) => {
  const {
    first_name,
    last_name,
    email,
    twitter_user,
    job: { job_title },
  } = description;

  const avatarUrl = createUrl(email);
  return (
    <article className="BadgeCard">
      <figure className="BadgeCard__header">
        <img src={platziConf} alt="conference logo" />
      </figure>
      <div className="BadgeCard__body BadgeCard__body-main">
        <img
          className="BadgeCard__avatar"
          src={avatarUrl}
          alt={`${first_name} ${last_name}`}
        />
        <h1 className="BadgeCard__fullname fs-medium fw-bold">
          {first_name}
          <br />
          {last_name}
        </h1>
      </div>
      <div className="BadgeCard__body BadgeCard__body-info">
        <p>{job_title}</p>
        <div className="BadgeCard__twitter">
          <img
            className="BadgeCard__twitter-logo"
            src={twitterLogo}
            alt="twitter logo"
            loading="lazy"
          />
          <span className="BadgeCard__twitter-user fs-normal fw-bold">
            @{twitter_user}
          </span>
        </div>
      </div>
      <footer className="BadgeCard__footer">
        <p>#platziconf</p>
      </footer>
    </article>
  );
};

export default BadgePreview;
