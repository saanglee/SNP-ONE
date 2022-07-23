import axios from "axios";
import { HttpRequest } from "../http/HttpRequest";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export const apiRequest = new HttpRequest(axiosInstance);
