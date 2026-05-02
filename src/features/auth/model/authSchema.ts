import { z } from 'zod';

import { AUTH_MESSAGES } from './authConstants';

export const registerSchema = z.object({
  name: z.string().min(2, AUTH_MESSAGES.NAME_MIN),
  email: z.email(AUTH_MESSAGES.EMAIL_INVALID),
  password: z.string().min(6, AUTH_MESSAGES.PASSWORD_MIN),
});

export const loginSchema = z.object({
  email: z.email(AUTH_MESSAGES.EMAIL_INVALID),
  password: z.string().min(6, AUTH_MESSAGES.PASSWORD_MIN),
});

export const resetPasswordSchema = z.object({
  email: z.email(AUTH_MESSAGES.EMAIL_INVALID),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
