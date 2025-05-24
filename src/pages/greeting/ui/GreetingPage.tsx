import { Logo } from "@/shared/ui/logo/Logo";
import { Button } from "@heroui/button";
import Link from "next/link";

export const GreetingPage: React.FC = () => (
  <section className="min-h-screen w-full flex flex-col items-center justify-center">
    <div className="flex flex-col items-center gap-6 px-4 text-center">
      <Logo iconSize={360} />
      {/* Заголовок */}
      <h1 className="text-7xl font-bold tracking-tight">Drum Draft</h1>

      {/* Описание */}
      <p className="text-lg  text-foreground/70 max-w-lg">
        Создавайте, редактируйте и делитесь барабанными паттернами. Используйте
        продвинутые алгоритмы для поиска похожих ритмов.
      </p>

      {/* Кнопка действия */}
      <Button
        as={Link}
        href="/library"
        size="lg"
        variant="solid"
        color="primary"
        className="text-lg px-8"
      >
        Погнали
      </Button>
    </div>
  </section>
);
