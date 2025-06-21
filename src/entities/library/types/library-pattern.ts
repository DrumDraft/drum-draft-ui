import { Pattern } from '@/entities/pattern/types';

export interface LibraryPattern {
  id: number;
  pattern: Pattern;
  title: string;
  isPublic: boolean;
}
