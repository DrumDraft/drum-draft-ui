import { ChildrenProp } from "@/shared/types";

export const NavList: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <nav>
      <ul className="flex flex-col p-3 gap-1">{children}</ul>
    </nav>
  );
};
