import { UserPreview } from '@/entities/user/ui/user-preview/UserPreview';
import { useAuth } from '@/features/auth/lib';
import { useNavBarContext } from '@/widgets/nav-sidebar/model';

export const ProfileMenuTrigger = () => {
  const { isOpen } = useNavBarContext();
  const { user } = useAuth();

  return (
    <UserPreview size="lg" user={user} info={isOpen ? { name: true } : null} />
  );
};
