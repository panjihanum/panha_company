import axios from "axios";

export const axiosUtil = axios.create({
  baseURL: "https://www.giovankov.com/api",
});
