import api from "./api";

export const startSimulation = async () => {
  await api.post("/api/simulation/start");
};

export const stopSimulation = async () => {
  await api.post("/api/simulation/stop");
};