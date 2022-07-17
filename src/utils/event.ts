const events = new Map();

interface Options {
  trigger: string;
  paths: () => Path2D[];
  cb: (e: Event, path: Path2D) => void;
}

export default function (ctx: CanvasRenderingContext2D, options: Options) {
  if (!events.has(options.trigger)) {
    ctx.canvas.addEventListener(options.trigger, (e) => {
      const { offsetX, offsetY } = e as MouseEvent;

      events
        .get(options.trigger)
        .callbacks.forEach(
          ({ paths, cb }: { paths: Options["paths"]; cb: Options["cb"] }) => {
            paths().forEach((path: Path2D) => {
              if (
                ctx.isPointInPath(
                  path,
                  offsetX * devicePixelRatio,
                  offsetY * devicePixelRatio
                )
              ) {
                cb(e, path);
              }
            });
          }
        );
    });

    events.set(options.trigger, {
      callbacks: [],
    });
  }

  console.log(events);
  events
    .get(options.trigger)
    .callbacks.push({ paths: options.paths, cb: options.cb });
}
