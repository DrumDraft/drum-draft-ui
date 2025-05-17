import { register as registerApi } from '@/features/auth/api/services';
import { getApiErrorMessage } from '@/shared/lib/error.utils';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface RegisterFormData {
  email: string;
  name: string;
  password: string;
}

export const useRegister = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async ({ email, name, password }: RegisterFormData) => {
    try {
      await registerApi({ email, name, password });
      router.push("/");
    } catch (err) {
      setError("root", {
        message: getApiErrorMessage(
          err,
          "Произошла неизвестная ошибка при регистрации"
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
