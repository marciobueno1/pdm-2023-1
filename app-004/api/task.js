import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    "X-Parse-Application-Id": "eFczibVN2ivGQXeCfNMCFXuDJceLxGyAxvJ5PExy",
    "X-Parse-REST-API-Key": "D1sxqz5tqBUWujf7DMRi72V9h8QGBuNDRTQDBtTY",
  },
});

export const getTasks = () => instance.get("Task").then((res) => res.data);

export const updateTask = (task) => {
  return instance.put(`/Task/${task.objectId}`, task, {
    headers: { "Content-Type": "application/json" },
  });
};
