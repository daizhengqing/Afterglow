import init from "@/utils/init";
import useArc from "@/shape/useArc";
import useEvent from "@/utils/event";

export default () => {
  window.onload = () => {
    const container = document.querySelector("#container") as HTMLElement;

    const { canvas, ctx } = init({
      el: container,
      width: 800,
      height: 500,
      backgroundColor: "rgba(0, 0, 0, 1)",
    });

    console.log(canvas, ctx);

    console.log(ctx.getContextAttributes());

    const arc = useArc(
      ctx,
      {
        x: 200,
        y: 200,
        radius: 40,
        startAngle: 0,
        endAngle: 2 * Math.PI,
      },
      {
        hollow: false,
        color: "#e56",
      }
    );

    const paths = [arc];

    useEvent(ctx, {
      trigger: "click",
      paths: () => paths,
      cb(e, path) {
        console.log(2333, e, path);
      },
    });
  };

  return <div id="container"></div>;
};
