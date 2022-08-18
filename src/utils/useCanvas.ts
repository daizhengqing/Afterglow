import { Color } from "../types";

interface Options {
  el: Element;
  width?: number;
  height?: number;
  backgroundColor?: Color;
}

interface Response {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

export default function (options: Options): Response {
  const canvas = document.createElement("canvas");

  options.el.appendChild(canvas);

  const [w, h] = [
    options.width ?? options.el.clientWidth,
    options.height ?? options.el.clientHeight,
  ];

  Object.assign(canvas.style, {
    width: `${w}px`,
    height: `${h}px`,
  });

  Object.assign(canvas, {
    width: w * devicePixelRatio,
    height: h * devicePixelRatio,
  });

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.scale(devicePixelRatio, devicePixelRatio);

  Object.assign(ctx, {
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "high",
  });

  if (options.backgroundColor) {
    ctx.beginPath();

    ctx.save();

    ctx.fillStyle = options.backgroundColor;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.restore();
  }

  return {
    canvas,
    ctx,
  };
}
