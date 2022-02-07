"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArea = void 0;
const utils_1 = require("./utils");
function getRectangleArea(a, b) {
    return a * b;
}
function getTriangleArea(height, base) {
    return (1 / 2) * height * base;
}
function getCircleArea(radius) {
    return 3.14 * radius;
}
function getArea(shape) {
    switch (shape.type) {
        case utils_1.FigureShape.Rectangle:
            console.log(getRectangleArea(shape.a, shape.b));
            break;
        case utils_1.FigureShape.Circle:
            console.log(getCircleArea(shape.radius));
            break;
        case utils_1.FigureShape.Triangle:
            console.log(getTriangleArea(shape.height, shape.base));
    }
}
exports.getArea = getArea;
