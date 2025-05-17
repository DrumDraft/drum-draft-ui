import { SizeProp } from '@/shared/types';
import { Skeleton } from '@heroui/react';
import React from 'react';
import { generateColorFromName } from '../../lib/generate-color-from-name.util';
import { getUsernameLetters } from '../../lib/get-username-letters.util';
import { UserProp } from '../../types';
import { profileIcon, profileIconSkeleton } from './profile-icon.styles';

export interface ProfileIconProps extends SizeProp, UserProp {}

export const ProfileIcon: React.FC<ProfileIconProps> = React.memo(
  ({ size = "md", user }) => {
    const { name } = user ?? {};

    const placeholderInitials = getUsernameLetters(name ?? "");
    const placeholderColor = generateColorFromName(name ?? "");

    const styles = profileIcon({ size });
    const skeletonStyles = profileIconSkeleton({ size });

    return (
      <Skeleton isLoaded={!!name} className={skeletonStyles}>
        <div className={styles} style={{ backgroundColor: placeholderColor }}>
          <span>{placeholderInitials}</span>
        </div>
      </Skeleton>
    );
  }
);
