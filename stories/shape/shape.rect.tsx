import useCanvas from "@/utils/useCanvas";
import useRect from "@/shape/useRect";
import useEvent from "@/utils/useEvent";

export default () => {
  window.onload = () => {
    const container = document.querySelector("#container") as HTMLElement;

    const { canvas, ctx } = useCanvas({
      el: container,
      width: 800,
      height: 500,
      backgroundColor: "rgba(0, 0, 0, 1)",
    });

    console.log(canvas, ctx);

    console.log(ctx.getContextAttributes());

    const rect = useRect(ctx, {
      attrs: {
        x: 200,
        y: 200,
        width: 100,
        height: 100,
      },
      style: {
        fill: "#e56",
        borderRadius: 20,
      },
    });

    const paths = [rect];

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
