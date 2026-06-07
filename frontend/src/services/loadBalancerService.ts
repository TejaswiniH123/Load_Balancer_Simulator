import api from "./api";

export const changeAlgorithm =
  async (algorithm: string) => {

    const response =
      await api.post(
        `/api/loadbalancer/algorithm/${algorithm}`
      );

    return response.data;
};

export const getCurrentAlgorithm =
  async () => {

    const response =
      await api.get(
        "/api/loadbalancer/algorithm"
      );

    return response.data;
};