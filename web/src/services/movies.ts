import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://www.omdbapi.com/?apikey=925eba28&s=',
});
