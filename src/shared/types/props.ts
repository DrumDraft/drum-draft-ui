import { SVGProps } from 'react';
import { Size } from './size';

export type ChildrenProp = {
  children?: React.ReactNode;
};

export interface ClassNameProp {
  className?: string;
}

export interface NumberSizeProp {
  size?: number;
}

export interface SizeProp {
  size?: Size;
}

export interface SvgIconProps extends SVGProps<SVGSVGElement>, NumberSizeProp {}

export interface ThemeProp {
  theme?: "light" | "dark";
}
