import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    "X-Parse-Application-Id": "eFczibVN2ivGQXeCfNMCFXuDJceLxGyAxvJ5PExy",
    "X-Parse-REST-API-Key": "D1sxqz5tqBUWujf7DMRi72V9h8QGBuNDRTQDBtTY",
    "Content-Type": "application/json",
  },
});

export const fetcher = (url) => axios.get(url).then((res) => res.data);

export const getTasks = (url) => {
  console.log("url", url);
  return instance
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log("err", err));
};

export const updateTask = (url, task) => {
  console.log("updateTask url", url);
  console.log("updateTask task", task);
  return instance.put(`/Task/${task.objectId}`, task, {
    headers: { "Content-Type": "application/json" },
  });
};
