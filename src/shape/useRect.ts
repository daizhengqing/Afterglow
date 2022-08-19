import { Style } from "@/types";
import useDrawer from "@/utils/useDrawer";

interface Attributes {
  x: number;
  y: number;
  width: number;
  height: number;
}

const _createPath = (attrs: Attributes, style: Style): Path2D => {
  const { x, y, width, height } = attrs;

  const path = new Path2D();

  const radius = style.borderRadius ? Math.max(style.borderRadius, 0) : 0;

  if (radius === 0) {
    path.rect(x, y, width, height);
  } else {
    const xPoints = [x, x + radius, x + width - radius, x + width];

    const yPoints = [y, y + radius, y + height - radius, y + height];

    path.moveTo(xPoints[1], yPoints[0]);

    path.lineTo(xPoints[2], yPoints[0]);

    path.arc(xPoints[2], yPoints[1], radius, -Math.PI / 2, 0);

    path.lineTo(xPoints[3], yPoints[2]);

    path.arc(xPoints[2], yPoints[2], radius, 0, Math.PI / 2);

    path.lineTo(xPoints[1], yPoints[3]);

    path.arc(xPoints[1], yPoints[2], radius, Math.PI / 2, Math.PI);

    path.lineTo(xPoints[0], yPoints[1]);

    path.arc(xPoints[1], yPoints[1], radius, Math.PI, Math.PI * 1.5);
  }

  return path;
};

export default function (
  ctx: CanvasRenderingContext2D,
  options: { attrs: Attributes; style: Style }
) {
  console.log(ctx, options);

  const path = _createPath(options.attrs, options.style);

  useDrawer(ctx, path, options.style);

  return path;
}
