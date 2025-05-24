import { Beat } from "../model";
import { SignatureMeasure } from "./index";

export interface Pattern {
  id: string;
  signatureBeats: number;
  signatureMeasure: SignatureMeasure;
  beats: Beat[];
  tags: string[];
}
