export type GridLineType = "regular" | "accent";

export interface GridLine {
  type: GridLineType;
}

export type GridStructure = GridLine[];
