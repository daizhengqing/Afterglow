interface Attributes {
  x: number;
  y: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  anticlockwise?: boolean;
}

export default function (attrs: Attributes) {
  console.log(attrs);
}
