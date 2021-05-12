// declare class
const Shape {
    constructor(color, shape){
        this.color = color;
        this.shape = shape;
    }

    drawShape() {
        console.log(`drawing ${this.shape} Shape`);
    }

    calculateArea() {
        console.log(`The area of ${this.shape} is : `);
    }
} 
// export class
export default Shape;