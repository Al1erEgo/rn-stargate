import axios from 'axios';

export const commonInstance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/',
  headers: { 'X-API-KEY': 'KHEH2BF-CSV40E2-P0B82G8-M3N9GZ1' },
});
