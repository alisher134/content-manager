import type { BaseFieldConfig, FieldRenderer } from './types';

import { Input } from '@/shared/components/Input';
import { PasswordInput } from '@/shared/components/PasswordInput';

export const renderFieldMap: Record<BaseFieldConfig['type'], FieldRenderer> = {
  text: (f, field) => <Input {...field} type="text" placeholder={f.placeholder} />,

  email: (f, field) => <Input {...field} type="email" placeholder={f.placeholder} />,

  password: (f, field) => <PasswordInput {...field} placeholder={f.placeholder} />,
};
