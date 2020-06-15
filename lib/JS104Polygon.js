/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
let Polygon = function(sidelengths) {
    this.sidelengths = sidelengths;
}

Polygon.prototype.perimeter = function ( ) {
    let perimeter = 0;
    this.sidelengths.forEach(x => {
        perimeter += x;
    });
    return perimeter;
}

const rectangle = new Polygon([10, 'apple', 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());