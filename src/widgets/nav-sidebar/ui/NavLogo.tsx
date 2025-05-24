"use client";
import { Logo } from "@/shared/ui/logo/Logo";
import Link from "next/link";
import { useNavBarContext } from "../model/context";

export const NavLogo: React.FC = () => {
  const { isOpen } = useNavBarContext();

  return (
    <Link href="/" className="p-3 flex">
      <Logo withText={isOpen} />
    </Link>
  );
};
