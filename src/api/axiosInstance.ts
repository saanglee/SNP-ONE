import { baseUrl } from './../../api2/constants';
import axios from 'axios';
import { HttpRequest } from '../http/HttpRequest';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export const apiRequest = new HttpRequest(axiosInstance);
