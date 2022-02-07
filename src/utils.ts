export enum FigureShape {
  Triangle = "Triangle",
  Circle = "Circle",
  Rectangle = "Rectangle",
}

export interface Rectangle {
  type: FigureShape.Rectangle;
  a: number;
  b: number;
}

export interface Triangle {
  type: FigureShape.Triangle;
  height: number;
  base: number;
}

export interface Circle {
  type: FigureShape.Circle;
  radius: number;
}
