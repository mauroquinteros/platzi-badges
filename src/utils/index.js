import md5 from "md5";

export const createUrl = (email) => {
  const hash = md5(email);
  const url = `https://gravatar.com/avatar/${hash}?d=identicon`;
  return url;
};

export const createAttendantObj = (object) => {
  const newObject = Object.keys(object).reduce((obj, key) => {
    if (key !== "avatar_url" && key !== "id_attendant") {
      if (key === "job") {
        obj["id_job"] = object[key].id_job;
      } else {
        obj[key] = object[key];
      }
    }
    return obj;
  }, {});
  return newObject;
};

export const getAttendantState = (target, attendant, selectName) => {
  if (target.name === selectName) {
    const titleValue = target.querySelector(
      `option[value="${target.value}"]`
    ).textContent;
    return {
      ...attendant,
      [target.name]: {
        id_job: target.value,
        job_title: titleValue,
      },
    };
  }
  return {
    ...attendant,
    [target.name]: target.value,
  };
}