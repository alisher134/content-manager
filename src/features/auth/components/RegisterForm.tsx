import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

import { REGISTER_DEFAULT_VALUES } from '@/features/auth/model/authConstants';
import { registerFormFields } from '@/features/auth/model/authFormFields';
import { type RegisterSchema, registerSchema } from '@/features/auth/model/authSchema';
import { Button } from '@/shared/components';
import { Form } from '@/shared/components/Form';
import { FormFieldRenderer } from '@/shared/components/FormFieldRenderer/FormFieldRenderer';

interface RegisterFormProps {
  readonly onLoginClick: string;
}

export const RegisterForm = ({ onLoginClick }: RegisterFormProps) => {
  const handleOnSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Form
      schema={registerSchema}
      onSubmit={handleOnSubmit}
      defaultValues={REGISTER_DEFAULT_VALUES}
      className="space-y-6"
    >
      <FormFieldRenderer fields={registerFormFields} className="space-y-4" />

      <Button
        type="submit"
        className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
      >
        <UserPlus className="mr-2 size-4" />
        Create Account
      </Button>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground text-sm">
          Already have an account?{' '}
          <Link to={onLoginClick} className="text-primary font-bold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </Form>
  );
};
