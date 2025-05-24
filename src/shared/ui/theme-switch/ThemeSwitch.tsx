"use client";
import { ClassNameProp } from '@/shared/types';
import { Button } from '@heroui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export interface ThemeSwitchProps extends ClassNameProp {}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      {...props}
      variant="ghost"
      onPress={() =>
        mounted ? setTheme(theme === "light" ? "dark" : "light") : null
      }
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
