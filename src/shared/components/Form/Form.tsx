import type { ReactNode, SyntheticEvent } from 'react';
import {
  type DefaultValues,
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ZodType } from 'zod';

interface FormProps<TValues extends FieldValues> {
  schema: ZodType<TValues, TValues>;
  defaultValues: DefaultValues<TValues>;
  onSubmit: SubmitHandler<TValues>;
  children: ReactNode;
  className?: string | undefined;
}

export function Form<TValues extends FieldValues>({
  children,
  defaultValues,
  onSubmit,
  schema,
  className,
}: Readonly<FormProps<TValues>>) {
  const methods = useForm<TValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onSubmit',
  });

  const handleFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    void methods.handleSubmit(onSubmit)(event);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleFormSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
