import { Beat } from '../model';

export interface Pattern {
  id: number | null;
  signatureBits: number;
  signatureMeasure: number;
  beats: Beat[];
  tags: string[];
  createdAt: Date | null;
  updatedAt: Date | null;
}
