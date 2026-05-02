import type { ReactNode } from 'react';
import type { FieldPath, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export interface BaseFieldConfig {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  className?: string | undefined;
  name: string;
  extra?: ReactNode;
}

export interface FieldConfig<TValues extends FieldValues> extends BaseFieldConfig {
  name: FieldPath<TValues>;
}

export type FieldRenderer = (f: BaseFieldConfig, field: UseFormRegisterReturn) => ReactNode;
