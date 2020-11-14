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
