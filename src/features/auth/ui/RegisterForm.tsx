"use client";

import { PasswordInput } from '@/shared/ui/components/form';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { useRegister } from '../lib';

export const RegisterForm = () => {
  const { register, handleSubmit, errors, isSubmitting, isValid } =
    useRegister();

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4 min-w-92">
      <div className="flex gap-4 flex-col">
        <Input
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Некорректный формат email адреса",
            },
            maxLength: {
              value: 50,
              message: "Email не может быть длиннее 50 символов",
            },
            validate: {
              notEmpty: (value) =>
                value.trim() !== "" || "Email не может быть пустым",
              noSpaces: (value) =>
                !value.includes(" ") || "Email не может содержать пробелы",
            },
          })}
          aria-label="Email"
          label="Email"
          labelPlacement="outside"
          placeholder="Введите email"
          disabled={isSubmitting}
          errorMessage={() => errors.email?.message}
          type="email"
        />

        <Input
          {...register("name", {
            required: "Имя обязательно",
          })}
          aria-label="Имя"
          label="Имя"
          labelPlacement="outside"
          placeholder="Введите имя"
          disabled={isSubmitting}
          errorMessage={errors.name?.message}
          type="text"
        />

        <PasswordInput
          {...register("password", {
            required: "Пароль обязателен",
          })}
          aria-label="Пароль"
          label="Пароль"
          labelPlacement="outside"
          placeholder="Придумайте пароль"
          disabled={isSubmitting}
          errorMessage={errors.password?.message}
          type="password"
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
        {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
};
