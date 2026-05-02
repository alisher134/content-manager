import { Link } from 'react-router-dom';

import { AUTH_PLACEHOLDERS } from './authConstants';

import { ROUTES } from '@/app/Routes';
import type {
  LoginSchema,
  RegisterSchema,
  ResetPasswordSchema,
} from '@/features/auth/model/authSchema';
import type { FieldConfig } from '@/shared/components/FormFieldRenderer/types';

const LABELS = {
  FULL_NAME: 'Full Name',
  WORK_EMAIL: 'Work Email',
  PASSWORD: 'Password',
} as const;

export const registerFormFields: FieldConfig<RegisterSchema>[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: AUTH_PLACEHOLDERS.NAME,
    label: LABELS.FULL_NAME,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: AUTH_PLACEHOLDERS.EMAIL,
    label: LABELS.WORK_EMAIL,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: AUTH_PLACEHOLDERS.PASSWORD,
    label: LABELS.PASSWORD,
  },
];

export const loginFormFields: FieldConfig<LoginSchema>[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: AUTH_PLACEHOLDERS.EMAIL,
    label: LABELS.WORK_EMAIL,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: AUTH_PLACEHOLDERS.PASSWORD,
    label: LABELS.PASSWORD,
    extra: (
      <Link
        to={ROUTES.FORGOT_PASSWORD}
        className="text-primary text-xs font-medium hover:underline"
      >
        Forgot password?
      </Link>
    ),
  },
];

export const resetPasswordFormFields: FieldConfig<ResetPasswordSchema>[] = [
  {
    name: 'email',
    type: 'email',
    placeholder: AUTH_PLACEHOLDERS.EMAIL,
    label: LABELS.WORK_EMAIL,
  },
];
