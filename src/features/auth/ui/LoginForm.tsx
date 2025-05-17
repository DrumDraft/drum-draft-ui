"use client";

import { useLogin } from '@/features/auth/lib/useLogin';
import { PasswordInput } from '@/shared/ui/components/form';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

export const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, isValid } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4 w-72">
      <div className="flex gap-4 flex-col">
        <Input
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите корректный email",
            },
          })}
          aria-label="Email"
          label="Email"
          labelPlacement="outside"
          placeholder="Введите email"
          disabled={isSubmitting}
          errorMessage={errors.email?.message}
          required
          type="email"
        />

        <PasswordInput
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Минимальная длина пароля 6 символов",
            },
          })}
          aria-label="Пароль"
          label="Пароль"
          labelPlacement="outside"
          placeholder="Введите пароль"
          disabled={isSubmitting}
          errorMessage={errors.password?.message}
          required
        />
      </div>

      {errors.root && (
        <div className="text-sm text-red-500 text-wrap max-w-full">
          <p>{errors.root.message}</p>
        </div>
      )}

      <Button
        className="w-full"
        color="primary"
        isLoading={isSubmitting}
        disabled={!isValid || isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Выполняется вход..." : "Войти"}
      </Button>
    </form>
  );
};
