import { axiosInstance } from '@/app/config/axios-instance';
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpService {
  protected get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return axiosInstance.get(url, config);
  }
  protected post<T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return axiosInstance.post(url, data, config);
  }
  protected put<T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return axiosInstance.put(url, data, config);
  }
  protected delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return axiosInstance.delete(url, config);
  }
}
