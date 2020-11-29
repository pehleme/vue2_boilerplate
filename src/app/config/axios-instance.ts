import { env } from '@/environments';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosRequestConfig: AxiosRequestConfig = { baseURL: env.baseUrl };
const axiosInstance: AxiosInstance = axios.create(axiosRequestConfig);

const authInterceptor = (config: AxiosRequestConfig) => config;
const loggerInterceptor = (config: AxiosRequestConfig) => config;

axiosInstance.interceptors.request.use(authInterceptor);
axiosInstance.interceptors.request.use(loggerInterceptor);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export { axiosInstance };
