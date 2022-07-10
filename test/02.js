import init from "../src/init.js";
import useAlpha from '../src/effect/useAlpha.js'

window.onload = () => {
  const { canvas, ctx } = init({
    el: document.querySelector("#container"),
    backgroundColor: "#fff",
  });

  const img = document.querySelector('#img')

  ctx.drawImage(img, 0, 0)

  useAlpha(ctx, {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    alpha:0.5
  })

  // const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

  // console.log(imageData)

  // for (let i = 0;i < imageData.data.length; i++) {
  //   if (i % 4 === 2)  imageData.data[i] -= 90
  // }

  ctx.putImageData(imageData, 0, 0)
}