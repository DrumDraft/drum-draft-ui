export const getUsernameLetters = (input: string): string => {
  if (!input) return "";

  const cleaned = input.trim();

  const delimiters = [" ", "_", ".", "-"];

  for (const delimiter of delimiters) {
    if (cleaned.includes(delimiter)) {
      const parts = cleaned.split(delimiter).filter(Boolean);
      const initials = parts.slice(0, 2).map((p) => p[0].toUpperCase());
      return initials.join("");
    }
  }

  const camelCaseParts = cleaned
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .filter(Boolean);

  if (camelCaseParts.length >= 2) {
    return camelCaseParts
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join("");
  }

  return cleaned.slice(0, 2).toUpperCase();
};
