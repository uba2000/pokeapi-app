import { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import CustomAxiosInstance from './AxiosInstance';
import ResponseHandler from './responseHandlers';

export const tokenString = (token: string) => `Bearer ${token}`;

export default class HttpClient {
  connector: AxiosInstance;

  responseHandler: typeof ResponseHandler;

  constructor(connector?: AxiosInstance) {
    this.connector = connector ?? CustomAxiosInstance;
    this.responseHandler = ResponseHandler;
  }

  async get(url: string, config?: AxiosRequestConfig<any>): Promise<any> {
    return this.responseHandler.handleResponse(await this.connector.get(url, config));
  }
}
