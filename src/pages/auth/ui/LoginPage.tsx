"use client";

import { LoginForm } from '@/features/auth/ui/LoginForm';
import { Link } from '@heroui/link';

export const LoginPage = () => {
  return (
    <div className="max-w-md w-full mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Вход в систему</h1>
        <p className="text-gray-600 dark:text-gray-400 space-y-2 block">
          Войдите в свою учетную запись
        </p>
      </div>

      <LoginForm />

      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Нет аккаунта? </span>
        <Link size="sm" href="/register">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};
