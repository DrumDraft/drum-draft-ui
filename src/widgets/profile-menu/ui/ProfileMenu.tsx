"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { ProfileMenuCard } from "./ProfileMenuCard";
import { ProfileMenuTrigger } from "./ProfileMenuTrigger";

export const ProfileMenu = () => {
  return (
    <Popover placement="top-start">
      <PopoverTrigger className="duration-200 w-full hover:bg-default-100 rounded-2xl">
        <button>
          <ProfileMenuTrigger />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 rounded-2xl">
        <ProfileMenuCard />
      </PopoverContent>
    </Popover>
  );
};
