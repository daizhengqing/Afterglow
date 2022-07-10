import _fill from '../utils/fill.js'
import _stroke from '../utils/stroke.js'

export type x = number
export type y = number
export type radius = number
export type startAngle = number
export type endAngle = number
export type anticlockwise = boolean | undefined

export type ArcBaseAttrs = {
  x: x,
  y: y,
  radius: radius,
  startAngle: startAngle,
  endAngle: endAngle,
  anticlockwise?: anticlockwise
}

export type hollow = boolean
export type color = string | CanvasGradient
export type width = number
export type dash = [number, number]
export type dashOffset = number

export type style = {
  width?: width,
  dash?: dash,
  dashOffset?: dashOffset,
  color?: color
}
export type outline = style[]

const _createPath = (baseAttrs: ArcBaseAttrs): Path2D => {
  const path = new Path2D()

  const {
    x, y, radius, startAngle, endAngle, anticlockwise
  } = baseAttrs

  path.arc(x, y, radius, startAngle, endAngle, anticlockwise)

  return path
}

const _draw = (ctx, baseAttrs, style) => {
  const path = _createPath(baseAttrs)

  hollow
    ? _stroke({ ctx, path, width: border, dash, dashOffset })
    : _fill({ ctx, path, color })
}

export default function Arc (ctx, baseAttrs, style) {
  ctx.save()

  ctx.beginPath()

  _draw(ctx, baseAttrs, )
 

  if (outline) {
    let r = radius + border / 2

    outline.forEach(line => {
      const {
        x,
        y,
        width,
        startAngle,
        endAngle,
        anticlockwise,
        color,
        dash,
        dashOffset
      } = line

      const linePath = _createPath(
        x, y, r + width / 2, startAngle, endAngle, anticlockwise
      )

      console.log(linePath)

      _stroke({ ctx, path: linePath, width, color, dash, dashOffset })

      r += width
    })
  }

  ctx.closePath()

  ctx.restore()
}