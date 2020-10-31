import React, { useState, useEffect } from "react";

// Components
import BadgeHero from '../components/BadgeHero'

const Badges = () => {
  const URL = 'https://api-badges.herokuapp.com/api/attendants'
  const [badges, setBadges] = useState({
    loading: false,
    data: null,
    error: null
  })

  const fetchBadges = async () => {
    try {
      setBadges((badges) => ({
        ...badges,
        loading: true
      }))
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setBadges((badges) => ({
        ...badges,
        loading: false,
        data
      }))
    } catch (error) {
      setBadges((badges) => ({
        ...badges,
        loading: false,
        error
      }))
    }
  }

  useEffect(() => {
    console.log('creando badge component')
    fetchBadges()
  }, [])

  return (
    <>
      <BadgeHero />
    </>
  );
};

export default Badges;
