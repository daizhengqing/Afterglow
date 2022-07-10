export default function ({
  ctx,
  path,
  width,
  color,
  dash,
  dashOffset
}) {
  console.log(...arguments)
  if (width) ctx.lineWidth = width

  ctx.strokeStyle = color

  if (dash) {
    ctx.setLineDash(dash)

    ctx.dashOffset = dashOffset
  }

  ctx.stroke(path)
}