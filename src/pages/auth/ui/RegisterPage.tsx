"use client";

import { RegisterForm } from '@/features/auth/ui/RegisterForm';
import { Link } from '@heroui/link';

export const RegisterPage = () => {
  return (
    <div className="max-w-md w-full mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Регистрация</h1>
        <p className="text-gray-600 dark:text-gray-400 space-y-2 block">
          Введите свои данные для регистрации
        </p>
      </div>

      <RegisterForm />

      <div className="flex justify-between  text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Уже есть аккаунт?
        </span>
        <Link size="sm" href="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};
