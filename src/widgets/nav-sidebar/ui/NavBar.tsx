import { SearchIcon } from '@/shared/ui/components/icons/SearchIcon';
import { ProfileMenu } from '@/widgets/profile-menu';
import { LibraryIcon } from 'lucide-react';
import { NavBarRoot } from './NavBarRoot';
import { NavLink } from './NavLink';
import { NavList } from './NavList';
import { NavLogo } from './NavLogo';

export const NavBar: React.FC = () => {
  return (
    <NavBarRoot>
      <aside className="flex flex-col h-full shrink-0 overflow-hidden">
        <NavLogo />
        <div className="pt-4">
          <NavList>
            <NavLink href="/search" icon={<SearchIcon />}>
              Поиск
            </NavLink>

            <NavLink href="/library" icon={<LibraryIcon size={32} />}>
              Библиотека
            </NavLink>
          </NavList>
        </div>
        <div className="mt-auto p-3">
          <ProfileMenu />
        </div>
      </aside>
    </NavBarRoot>
  );
};
