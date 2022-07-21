import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const api = {
  getOverall: () =>
    axios.get(`${BASE_URL}/overall`).then((response) => response.data),
  getCampaign: () =>
    axios.get(`${BASE_URL}/campaign`).then((response) => response.data),
  getPlatform: () => axios.get(`${BASE_URL}/platform`),
};
