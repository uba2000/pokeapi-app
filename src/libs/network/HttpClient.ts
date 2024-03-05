import { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import CustomAxiosInstance from './AxiosInstance';
import ResponseHandler from './responseHandlers';

/**
 * This class represents an HTTP client for making requests to external APIs using Axios.
 * 
 * @param connector - The Axios instance used for making HTTP requests.
 * @param responseHandler - The class for handling responses from HTTP requests.
 */
export default class HttpClient {
  connector: AxiosInstance;

  responseHandler: typeof ResponseHandler;

  /**
   * @param connector -  Optional parameter to specify a custom Axios instance. 
   * If not provided, it uses the default instance from CustomAxiosInstance.
   */
  constructor(connector?: AxiosInstance) {
    // Initialize the connector with the custom Axios instance or the default one
    this.connector = connector ?? CustomAxiosInstance;
    // Initialize the response handler
    this.responseHandler = ResponseHandler;
  }

  /**
   * Sends a GET request to the specified URL. 
   * It returns a promise that resolves with the response data after handling it using the response handler.
   * @param url
   * @param config 
   * @returns Promise<any>
   */
  async get(url: string, config?: AxiosRequestConfig<any>): Promise<any> {
    // Handle the response using the response handler
    return this.responseHandler.handleResponse(await this.connector.get(url, config));
  }
}
