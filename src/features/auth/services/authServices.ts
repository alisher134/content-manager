import type { AuthResponse, LoginPayload, RegisterPayload } from '../types/authTypes';

import { httpClient } from '@/shared/api/httpClient';

export const authServices = {
  login: async ({ email, password }: LoginPayload): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/login', { email, password });

    return response.data;
  },

  register: async ({ email, password, name }: RegisterPayload): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/register', {
      email,
      password,
      name,
    });

    return response.data;
  },
};
