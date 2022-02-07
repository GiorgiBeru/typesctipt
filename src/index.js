"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = require("./area");
var FigureShape;
(function (FigureShape) {
    FigureShape["Triangle"] = "Triangle";
    FigureShape["Circle"] = "Circle";
    FigureShape["Rectangle"] = "Rectangle";
})(FigureShape || (FigureShape = {}));
let shape = {
    a: 4,
    b: 5,
    type: FigureShape.Rectangle,
};
(0, area_1.getArea)(shape);
