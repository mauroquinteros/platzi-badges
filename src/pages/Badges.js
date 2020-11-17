import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BadgeHero from "../components/BadgeHero";
import SearchBadge from "../components/SearchBadge";
import BadgeList from "../components/BadgeList";
import ServerError from "../components/ServerError";
import Loading from "../components/Loading";

// Assets
import "../assets/sass/components/badges.scss";

// Utils
import { getBadges } from "../utils/requests";

const Badges = () => {
  const [badges, setBadges] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [query, setQuery] = useState("");

  const handleQuery = (ev) => {
    setQuery(ev.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        setBadges({
          loading: true,
          error: null,
        });
        const data = await getBadges();
        setBadges({
          loading: false,
          error: null,
          data,
        });
      } catch (error) {
        setBadges({
          loading: false,
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
    <>
      <BadgeHero />
      <section className="container Badges">
        <div className="Badges__container">
          {badges.error ? (
            <ServerError
              title="Ocurrío un Error!"
              message="Inténtalo más tarde"
            />
          ) : badges.loading & !badges.data ? (
            <Loading />
          ) : (
            <>
              <SearchBadge onChange={handleQuery} value={query} />
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn">
                  Nuevo Badge
                </Link>
              </div>
              <BadgeList badges={badges.data} query={query} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Badges;
