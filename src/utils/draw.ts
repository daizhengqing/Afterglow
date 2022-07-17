import { Style } from "@/types";

export const fill = (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  style: Style
) => {
  if (style.color) {
    ctx.fillStyle = style.color;
  }

  ctx.fill(path);
};

export const stroke = (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  style: Style
) => {
  if (typeof style.border === "number") {
    ctx.lineWidth = style.border;
  }

  if (style.color) {
    ctx.strokeStyle = style.color;
  }

  if (style.dash) {
    ctx.setLineDash(style.dash);

    if (style.dashOffset) {
      ctx.lineDashOffset = style.dashOffset;
    }
  }

  ctx.stroke(path);
};

export default function (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  style: Style
) {
  ctx.save();

  style.hollow ? stroke(ctx, path, style) : fill(ctx, path, style);

  ctx.restore();
}
