import { Logo } from "@/shared/ui/logo/Logo";
import { Divider } from "@heroui/divider";

export const Header = () => {
  return (
    <header className="w-full flex">
      <div className="w-full flex mx-auto p-4 flex-col">
        <div className="w-full flex justify-between">
          <Logo size="lg" withText />
        </div>
        <Divider className="mt-4" />
      </div>
    </header>
  );
};
