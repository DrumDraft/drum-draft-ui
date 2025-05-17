import { hslToRgb, rgbToHex } from "@/shared/lib";

export const generateColorFromName = (name: string): string => {
  // 1. Хеш по имени
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;
  const saturation = 60 + (Math.abs(hash) % 20);
  const lightness = 50 + (Math.abs(hash) % 10);

  const rgb = hslToRgb(hue, saturation, lightness);

  return rgbToHex(...rgb);
};
