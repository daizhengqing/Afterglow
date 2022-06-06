export default function ({
  el,
  width,
  height,
  backgroundColor
}) {
  const canvas = document.createElement('canvas')

  el.appendChild(canvas)

  const [w, h] = [width ?? el.clientWidth, height ?? el.clientHeight]

  Object.assign(canvas.style, { width: w + 'px', height: h + 'px' })

  Object.assign(canvas, { width: w * devicePixelRatio, height: h * devicePixelRatio })

  const ctx = canvas.getContext('2d')

  ctx.scale(devicePixelRatio, devicePixelRatio)

  Object.assign(ctx, {
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'high'
  })

  if (backgroundColor) {
    ctx.beginPath()

    ctx.save()

    ctx.fillStyle = backgroundColor

    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.restore()
  }

  return {
    canvas,
    ctx
  }
}