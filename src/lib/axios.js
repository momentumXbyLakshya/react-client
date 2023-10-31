import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URI}/api`,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    Authorization: `Bearer ${Cookies.get("hanko")}`,
  },
});
