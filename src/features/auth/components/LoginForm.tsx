import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

import { ROUTES } from '@/app/Routes';
import { LOGIN_DEFAULT_VALUES } from '@/features/auth/model/authConstants';
import { loginFormFields } from '@/features/auth/model/authFormFields';
import { type LoginSchema, loginSchema } from '@/features/auth/model/authSchema';
import { Button } from '@/shared/components';
import { Form } from '@/shared/components/Form';
import { FormFieldRenderer } from '@/shared/components/FormFieldRenderer/FormFieldRenderer';

export const LoginForm = () => {
  const handleOnSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Form
      schema={loginSchema}
      defaultValues={LOGIN_DEFAULT_VALUES}
      onSubmit={handleOnSubmit}
      className="space-y-6"
    >
      <FormFieldRenderer fields={loginFormFields} className="space-y-4" />

      <Button
        type="submit"
        className="shadow-primary/20 h-11 w-full text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
      >
        <LogIn className="mr-2 size-4" />
        Sign In
      </Button>
      <div className="mt-6">
        <p className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link to={ROUTES.REGISTER} className="text-primary font-bold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </Form>
  );
};
