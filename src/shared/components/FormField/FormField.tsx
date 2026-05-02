import type { ReactNode } from 'react';
import { type FieldPath, type FieldValues, useFormContext } from 'react-hook-form';

import { Label } from '../Label';

interface FormFieldProps<TValues extends FieldValues, TName extends FieldPath<TValues>> {
  children: ReactNode;
  name: TName;
  label: string;
  className?: string | undefined;
  extra?: ReactNode;
}

export function FormField<TValues extends FieldValues, TName extends FieldPath<TValues>>({
  children,
  name,
  label,
  className,
  extra,
}: Readonly<FormFieldProps<TValues, TName>>) {
  const {
    formState: { errors },
  } = useFormContext<TValues>();

  const error = errors[name];

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="text-xs font-semibold tracking-wider uppercase">
          {label}
        </Label>

        {extra}
      </div>

      {children}

      {typeof error?.message === 'string' && (
        <span className="text-destructive text-sm font-medium">{error.message}</span>
      )}
    </div>
  );
}
