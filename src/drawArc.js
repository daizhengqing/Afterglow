export default function (ctx, {
  x,
  y,
  radius,
  startAngle,
  endAngle,
  anticlockwise = false,
  color,
  hollow = false,
  dash = null,
  dashOffset = 0,
  width = 0,
  outline = [],
}) {
  ctx.beginPath()

  ctx.save()

  if (color) ctx.fillStyle = color

  ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

  if (hollow) {
    if (dash) {
      ctx.setLineDash(dash)

      ctx.lineDashOffset = dashOffset
    }

    ctx.lineWidth = width;

    ctx.strokeStyle = color;

    ctx.stroke()
  } else {
    ctx.fillStyle = color;

    ctx.fill()
  }

  ctx.restore()

  if (outline) {
    let r = radius + width / 2

    outline.forEach(line => {
      ctx.beginPath()

      ctx.save()

      ctx.lineWidth = line.width

      ctx.strokeStyle = line.color

      if (line.dash) {
        ctx.setLineDash(line.dash)

        ctx.lineDashOffset = line.dashOffset
      }

      ctx.arc(x, y, r + line.width / 2, startAngle, endAngle, anticlockwise)
    
      r += line.width

      ctx.stroke()

      ctx.restore()
    })
  }
}