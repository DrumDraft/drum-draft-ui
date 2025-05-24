import { DrumType } from "@/entities/pattern/types";

export interface BeatMap extends Record<DrumType, number[]> {}
