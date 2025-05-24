import { DrumType } from "../types";

export interface Beat {
  position: number;
  instruments: Record<DrumType, boolean>;
}
