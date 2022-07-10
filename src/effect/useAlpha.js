export default function (ctx, {
  x,
  y,
  width,
  height,
  alpha
}) {
  const imageData = ctx.getImageData(x, y, width, height)

  alpha = 255 * alpha

  for (let i = 0;i < imageData.data.length; i++) {
    if (i % 4 === 3)  imageData.data[i] = alpha
  }

  ctx.putImageData(imageData, x, y)
}