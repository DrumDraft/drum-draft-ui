import { routes } from "@/shared/config/routes";
import { Button } from "@heroui/button";
import Link from "next/link";

export const NotFoundMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mt-4">
          Страница не найдена
        </h2>
        <p className="text-lg text-default-500 mt-2">
          Извините, мы не смогли найти страницу, которую вы ищете.
        </p>
      </div>

      <div className="flex gap-3 mt-8">
        <Button as={Link} href={routes.base} variant="solid" color="primary">
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};
