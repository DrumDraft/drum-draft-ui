import { Beat } from '@/entities/pattern/model';

export interface CreateLibraryPatternDto {
  title: string;
  signatureBits: number;
  signatureMeasure: number;
  beats: Beat[];
  tags?: string[];
  isPublic?: boolean;
}
