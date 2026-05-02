import { type FieldValues, useFormContext } from 'react-hook-form';

import { FormField } from '../FormField';

import { renderFieldMap } from './renderFieldMap';
import type { FieldConfig } from './types';

interface FormFieldRendererProps<TValues extends FieldValues> {
  fields: FieldConfig<TValues>[];
  className?: string | undefined;
}

export function FormFieldRenderer<TValues extends FieldValues>({
  fields,
  className,
}: Readonly<FormFieldRendererProps<TValues>>) {
  const { register } = useFormContext<TValues>();

  return (
    <div className={className}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          name={field.name}
          label={field.label}
          extra={field.extra}
          className={field.className}
        >
          {renderFieldMap[field.type](field, register(field.name))}
        </FormField>
      ))}
    </div>
  );
}
