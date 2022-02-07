import { getArea } from "./area";

enum FigureShape {
  Triangle = "Triangle",
  Circle = "Circle",
  Rectangle = "Rectangle",
}

interface Rectangle {
  type: FigureShape.Rectangle;
  a: number;
  b: number;
}

interface Triangle {
  type: FigureShape.Triangle;
  height: number;
  base: number;
}

interface Circle {
  type: FigureShape.Circle;
  radius: number;
}

let shape: Circle | Rectangle | Triangle = {
  a: 4,
  b: 5,
  type: FigureShape.Rectangle,
};

getArea(shape);
