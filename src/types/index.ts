export type Color = string | CanvasGradient | CanvasPattern;

export interface Outline {
  width?: number;
  color?: Color;
  dash?: [number, number];
  dashOffset?: number;
}

export interface Style {
  border?: number;
  color?: Color;
  hollow?: boolean;
  dash?: [number, number];
  dashOffset?: number;
  outline?: Outline[];
}
