import { Style } from "@/types";
import draw from "@/utils/draw";

interface Attributes {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  anticlockwise?: boolean;
}

const _createPath = (attrs: Attributes): Path2D => {
  const { x, y, radius, startAngle, endAngle, anticlockwise } = attrs;

  const path = new Path2D();

  path.arc(x, y, radius, startAngle, endAngle, anticlockwise);

  return path;
};

export default function (
  ctx: CanvasRenderingContext2D,
  attrs: Attributes,
  style: Style
): Path2D {
  console.log(attrs);

  const path = _createPath(attrs);

  draw(ctx, path, style);

  return path;
}
