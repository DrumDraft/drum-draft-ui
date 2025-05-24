"use client";
import { ClassNameProp, SizeProp } from '@/shared/types';
import clsx from 'clsx';
import { FC } from 'react';
import { LogoIcon } from '../icons/LogoIcon';
import { logo } from './logo.styles';

interface LogoProps extends ClassNameProp, SizeProp {
  withText?: boolean;
  direction?: "row" | "column";
  iconSize?: number;
}

export const Logo: FC<LogoProps> = ({
  className,
  size = "md",
  withText = false,
  direction = "row",
  iconSize,
}) => {
  const styles = logo({ size, direction });

  return (
    <div className={clsx(styles.base(), className)}>
      <LogoIcon
        className={styles.icon()}
        size={iconSize ?? +styles.iconSize()}
      />

      {withText ? <span className={styles.text()}>DrumDraft</span> : null}
    </div>
  );
};
