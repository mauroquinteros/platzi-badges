const URL = "https://api-badges.herokuapp.com/api";

export const getBadges = async () => {
  try {
    const response = await fetch(`${URL}/attendants/`);
    const { data } = await response.json();
    if (Array.isArray(data)) return data;
    else return null;
  } catch (error) {
    throw new Error(error.message);
  }
};
