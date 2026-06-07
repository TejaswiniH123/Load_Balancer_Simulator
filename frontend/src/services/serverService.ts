import api from "./api";

export const getServers = async () => {
  const response = await api.get("/api/servers");
  return response.data;
};