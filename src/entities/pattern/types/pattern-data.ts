import { Beat } from "../model";
import { TimeSignature } from "./signature";

export interface PatternData {
  beats: Beat[];
  signature: TimeSignature;
}
