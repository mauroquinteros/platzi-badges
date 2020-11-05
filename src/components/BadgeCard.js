import React from "react";

// Assets
import platziConf from '../assets/images/platziconf-logo.svg'
import twitterLogo from '../assets/images/twitter.svg'

const BadgeCard = ({ badge }) => {
  const { first_name, last_name, twitter_user, avatar_url, id_job} = badge
  return (
    <article className="BadgeCard">
      <figure className="BadgeCard__header">
        <img src={platziConf} alt="conference logo"/>
      </figure>
      <div className="BadgeCard__body BadgeCard__body-main">
        <img src={avatar_url} alt={`${first_name} ${last_name}`}/>
        <h1>
          {first_name}
          <br/>
          {last_name}
        </h1>
      </div>
      <div className="BadgeCard__body BadgeCard__body-info">
        <p>Trabajo o profesión: {id_job}</p>
        <div>
          <img src={twitterLogo} alt="twitter logo"/>
          <span>@{twitter_user}</span>
        </div>
      </div>
      <footer>
        <p>#platziconf</p>
      </footer>
    </article>
  );
};

export default BadgeCard;
