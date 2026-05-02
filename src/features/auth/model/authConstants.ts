import type {
  LoginSchema,
  RegisterSchema,
  ResetPasswordSchema,
} from '@/features/auth/model/authSchema';

export const AUTH_MESSAGES = {
  EMAIL_INVALID: 'Invalid email address',
  PASSWORD_MIN: 'Password must be at least 6 characters long',
  NAME_MIN: 'Name must be at least 2 characters long',
} as const;

export const AUTH_PLACEHOLDERS = {
  EMAIL: 'john@company.com',
  PASSWORD: '••••••••',
  NAME: 'Alisher Rakhmanov',
} as const;

export const REGISTER_DEFAULT_VALUES: RegisterSchema = {
  name: '',
  email: '',
  password: '',
};

export const LOGIN_DEFAULT_VALUES: LoginSchema = {
  email: '',
  password: '',
};

export const RESET_PASSWORD_DEFAULT_VALUES: ResetPasswordSchema = {
  email: '',
};
