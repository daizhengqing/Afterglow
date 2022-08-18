import { Style } from "@/types";
import useDrawer from "@/utils/useDrawer";

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
  options: { attrs: Attributes; style: Style }
): Path2D {
  console.log(options.attrs);

  const path = _createPath(options.attrs);

  useDrawer(ctx, path, options.style);

  return path;
}
