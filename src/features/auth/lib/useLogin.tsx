import { login } from '@/features/auth/api/services';
import { getApiErrorMessage } from '@/shared/lib/error.utils';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    try {
      await login({ email, password });
      router.push("/");
    } catch (err) {
      console.log(err);

      setError("root", {
        message: getApiErrorMessage(
          err,
          "Произошла неизвестная ошибка при входе"
        ),
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    isValid,
  };
};
