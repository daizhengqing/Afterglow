export type Color = string | CanvasGradient | CanvasPattern;

export interface Style {
  border?: number;
  borderRadius?: number;
  borderColor?: Color;
  fill?: Color;
  dash?: [number, number];
  dashOffset?: number;
  opacity?: number;
}
