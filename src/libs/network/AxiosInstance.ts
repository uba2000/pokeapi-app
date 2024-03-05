import axios from 'axios';

/**
 * This module exports an instance of Axios configured with custom settings for making HTTP requests to the PokeAPI.
 */

// Create a custom instance of Axios
const CustomAxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: { 'Content-Type': 'application/json' },
});

export default CustomAxiosInstance;
