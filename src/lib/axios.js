import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URI}/api`,
  withCredentials: true,
  timeout: 20000,
});
