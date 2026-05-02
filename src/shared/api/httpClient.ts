import axios from 'axios';

import { envConfig } from '@/shared/config/apiConfig';

export const httpClient = axios.create({
  baseURL: envConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
