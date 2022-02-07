import { FigureShape, Rectangle, Triangle, Circle } from "./utils";
function getRectangleArea(a: number, b: number): number {
  return a * b;
}

function getTriangleArea(height: number, base: number): number {
  return (1 / 2) * height * base;
}

function getCircleArea(radius: number): number {
  return 3.14 * radius;
}

export function getArea(shape: Circle | Rectangle | Triangle): void {
  switch (shape.type) {
    case FigureShape.Rectangle:
      console.log(getRectangleArea(shape.a, shape.b));
      break;
    case FigureShape.Circle:
      console.log(getCircleArea(shape.radius));
      break;
    case FigureShape.Triangle:
      console.log(getTriangleArea(shape.height, shape.base));
  }
}
