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

export const getJobs = async () => {
  try {
    const response = await fetch(`${URL}/jobs/`);
    const { data } = await response.json();
    if (Array.isArray(data)) return data;
    else return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addAttendant = async (attendant) => {
  try {
    const response = await fetch(`${URL}/attendants/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendant),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
