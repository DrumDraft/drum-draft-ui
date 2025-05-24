import { Pattern } from "@/entities/pattern/types";

export interface LibraryPattern {
  id: string;
  pattern: Pattern;
  title: string;
  isPublic: boolean;
}
