import init from "../src/init.js";
import drawArc from "../src/shape/arc.js";

window.onload = () => {
  const { canvas, ctx } = init({
    el: document.querySelector("#container"),
    backgroundColor: "#000",
  });

  drawArc(
    ctx,
    {
      x: 100,
      y: 100,
      radius: 20,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      anticlockwise: false,
    },
    {
      color: "#e56",
      hollow: false,
      // dash: [2, 5],
      dashOffset: 0,
      // width: 50,
      outline: [
        { width: 10, dash: null, dashOffset: 0, color: "#fff" },
        { width: 10, dash: null, dashOffset: 0, color: "#e56" },
        { width: 10, dash: null, dashOffset: 0, color: "#fff" },
        { width: 10, dash: null, dashOffset: 0, color: "#e56" },
        { width: 10, dash: null, dashOffset: 0, color: "#fff" },
        // { width: 10, dash: null, dashOffset: 0, color: 'green' },
      ],
    }
  );
};
