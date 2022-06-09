const _createPath = baseAttributes => {
  const path = new Path2D()

  path.arc(x, y, radius, startAngle, endAngle, anticlockwise)

  return path
}

const _stroke = (path, width, color, dash, dashOffset) => {
  ctx.lineWidth = width

  ctx.strokeStyle = color
  
  if (dash) {
    ctx.setLineDash(dash)

    ctx.dashOffset = dashOffset
  }
  
  ctx.stroke(path)
}

const _fill = (path, color) => {
  ctx.fillStyle = color

  ctx.fill(path)
}

export default function Arc (ctx, baseAttributes, style, {
  x,
  y,
  radius,
  startAngle,
  endAngle,
  anticlockwise = false,
  color,
  hollow = false,
  border,
  dash = null,
  dashOffset = 0,
  outline
}) {
  ctx.beginPath()

  ctx.save()

  

  if (hollow) {
    _stroke()
  } else {
    ctx.fillStyle = color;

    ctx.fill(path)
  }

  ctx.restore()
}