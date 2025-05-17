import { UserPreview } from '@/entities/user/ui/user-preview/UserPreview';
import { useAuth } from '@/features/auth/lib';
import { routes } from '@/shared/config/routes';
import { ThemeSwitch } from '@/shared/ui/components/theme-switch/';
import { Button } from '@heroui/button';
import Link from 'next/link';

export const ProfileMenuCard = () => {
  const { user } = useAuth();

  return (
    <div className="p-2 w-[254]">
      <div className="flex gap-2">
        <UserPreview user={user} info={{ email: true, name: true }} />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <Button
          variant="light"
          as={Link}
          href={routes.profile}
          className="text-small font-bold"
        >
          Перейти в профиль
        </Button>

        <ThemeSwitch className="w-full" />
      </div>
    </div>
  );
};
