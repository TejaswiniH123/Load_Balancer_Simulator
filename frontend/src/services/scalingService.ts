import api from "./api";

export const addServer =
async () => {

  await api.post(
    "/api/servers/add"
  );
};

export const removeServer =
async () => {

  await api.post(
    "/api/servers/remove"
  );
};