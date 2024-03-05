import axios from 'axios';

const CustomAxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: { 'Content-Type': 'application/json' },
});

export default CustomAxiosInstance;
