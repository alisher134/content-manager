import { Mail } from 'lucide-react';

import { RESET_PASSWORD_DEFAULT_VALUES } from '@/features/auth/model/authConstants';
import { resetPasswordFormFields } from '@/features/auth/model/authFormFields';
import { type ResetPasswordSchema, resetPasswordSchema } from '@/features/auth/model/authSchema';
import { Button } from '@/shared/components';
import { Form } from '@/shared/components/Form';
import { FormFieldRenderer } from '@/shared/components/FormFieldRenderer/FormFieldRenderer';

const handleOnSubmit = (data: ResetPasswordSchema) => {
  console.log(data);
};

export const ForgotPasswordForm = () => (
  <Form
    schema={resetPasswordSchema}
    defaultValues={RESET_PASSWORD_DEFAULT_VALUES}
    className="space-y-6"
    onSubmit={handleOnSubmit}
  >
    <FormFieldRenderer fields={resetPasswordFormFields} className="space-y-4" />

    <Button
      type="submit"
      className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
    >
      <Mail className="mr-2 size-4" />
      Send Reset Link
    </Button>
  </Form>
);
