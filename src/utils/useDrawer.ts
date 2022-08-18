import { Style } from "@/types";

export const fill = (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  style: Style
) => {
  if (style.fill) {
    ctx.fillStyle = style.fill;
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

  if (style.borderColor) {
    ctx.strokeStyle = style.borderColor;
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

  if (style.fill) {
    fill(ctx, path, style);
  }

  if (style.border) {
    stroke(ctx, path, style);
  }

  ctx.restore();
}
