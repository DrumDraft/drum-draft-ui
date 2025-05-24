import { SizeProp } from "@/shared/types";
import { Skeleton } from "@heroui/react";
import { UserProp } from "../../types";
import { ProfileIcon } from "../profile-icon";
import {
  userPreview,
  userPreviewEmail,
  userPreviewInfo,
  userPreviewName,
} from "./user-preview.styles";

export interface UserPreviewProps extends SizeProp, UserProp {
  info?: { name?: boolean; email?: boolean } | null;
  isLink?: boolean;
}

export const UserPreview: React.FC<UserPreviewProps> = ({
  user,
  size = "md",
  isLink = false,
  info = null,
}) => {
  const { name, email } = user ?? {};

  return (
    <div className={userPreview({ size })}>
      <ProfileIcon size={size} user={user} />

      {info && (
        <div className={userPreviewInfo({ size })}>
          {info?.name && (
            <Skeleton isLoaded={!!user} className={userPreviewName({ size })}>
              {name}
            </Skeleton>
          )}

          {info?.email && (
            <Skeleton isLoaded={!!user} className={userPreviewEmail({ size })}>
              {email}
            </Skeleton>
          )}
        </div>
      )}
    </div>
  );
};
