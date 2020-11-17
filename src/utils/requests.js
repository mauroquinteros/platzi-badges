const URL = "https://api-badges.herokuapp.com/api";

export const getBadges = async () => {
  try {
    const response = await fetch(`${URL}/attendants/`);
    const { data } = await response.json();
    if (Array.isArray(data)) return data;
    else throw new Error("Error al realizar la petición");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getJobs = async () => {
  try {
    const response = await fetch(`${URL}/jobs/`);
    const { data } = await response.json();
    if (Array.isArray(data)) return data;
    else throw new Error("Error al realizar la petición");
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

export const getAttendantById = async (idBadge) => {
  try {
    const response = await fetch(`${URL}/attendants/${idBadge}/`);
    const { data } = await response.json();
    if (Array.isArray(data)) {
      const [attendant] = data;
      return attendant;
    } else throw new Error("Error al realizar la petición");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editAttendant = async (idBadge, attendant) => {
  try {
    const response = await fetch(`${URL}/attendants/${idBadge}/`, {
      method: "PUT",
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

export const deleteAttendant = async (idBadge) => {
  try {
    const response = await fetch(`${URL}/attendants/${idBadge}/`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
