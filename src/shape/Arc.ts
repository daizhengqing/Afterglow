interface BaseAttributes {
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  anticlockwise: boolean
}

interface Outline {
  width?: number,
  color?: string,
  dash?: [number, number],
  dashOffset?: number,
}

interface Style {
  border?: number,
  color?: string,
  hollow?: boolean,
  dash?: [number, number],
  dashOffset?: number,
  outline?: Outline[]
}

const _createPath = ({
  x,
  y,
  radius,
  startAngle,
  endAngle,
  anticlockwise
}: BaseAttributes): Path2D => {
  const path = new Path2D()

  path.arc(x, y, radius, startAngle, endAngle, anticlockwise)

  return path
}

const _stroke = (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  {
    border,
    color,
    dash,
    dashOffset
  }: Style
) => {
  ctx.lineWidth = border

  ctx.strokeStyle = color
  
  if (dash) {
    ctx.setLineDash(dash)

    ctx.lineDashOffset = dashOffset
  }
  
  ctx.stroke(path)
}

const _fill = (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  {
    color
  }: Style
) => {
  ctx.fillStyle = color

  ctx.fill(path)
}

const _drawOutline = (
  ctx: CanvasRenderingContext2D,
  outline: Outline[] = [],
  radius: number
): Path2D[] => {
  const paths: Path2D[] = []

  outline.forEach(line => {
    ctx.beginPath()

    ctx.save()

    const path = _createPath()

    ctx.restore()

  })

  return paths;
}

export default function Arc (
  ctx: CanvasRenderingContext2D,
  baseAttributes: BaseAttributes,
  style: Style
) {
  ctx.beginPath()

  ctx.save()

  const  path = _createPath(baseAttributes)

  if (style.hollow) {
    _stroke(ctx, path, style)
  } else {
    _fill(ctx, path, style)
  }

  if (style.outline) _drawOutline(ctx, style.outline, baseAttributes.radius + style.border / 2)

  ctx.restore()
}